---
lang: ruby
layout: bin
name: puffy
refs: []
tags:
- basecamp
title: Чтение и запись в бэйскамп
---
{% raw %}
```ruby
#!/usr/bin/env ruby
# SoRrY fOr My RuBy
# encoding: UTF-8

require 'yaml'
$cfg = YAML.load_file(File.expand_path("~/.puffyrc"))


require 'rubygems'
require 'thor'
require 'json'
require 'httparty'
require 'pp'
require 'date'

def _read_my_file
  JSON.parse( File.read(File.expand_path('~/.puffy-my-tasks.json')))
end

def _write_my_file data
  File.open(File.expand_path('~/.puffy-my-tasks.json'), 'w') { |file| file.write(data.to_json) }
end

def _account_to_id acc
  $cfg['accounts'][acc]['id']
end


$larr = ' ← ';

def format_my_list ids
  data = _read_my_file
  plain = []
  today = []
  data.each do |account, t|
    next unless ids.include? account
    t.each do |prj|
      prj['assigned_todos'].each do |todo|
        itm = (todo['content'] + $larr + prj['name'] + ' (' + prj['bucket']['name']+')')
        if(todo['due_at'])
          due = Date.strptime(todo['due_at'], "%Y-%m-%d")
          if(due <= Time.now().to_date())
            today.push(itm)
          end
        end
        plain.push({name: itm, date: DateTime.rfc3339(todo['created_at'])})
      end
    end
  end

  plain.sort! { |x,y| y[:date] <=> x[:date] }

  $cfg['toggl']['common-tasks'].each do |t|
    puts t
  end

  if today.size > 0
    puts '                  '
    puts '_____Today_____'
    today.each do |t|
      puts t
    end
  end

  puts '                  '
  puts '_____Newest_____'
  plain.first(7).each do |itm|
    puts itm[:name]
  end
  puts '                  '
  puts '                  '

  data.each do |account, t|
    next unless ids.include? account
    t.each do |prj|
      #if prj['name'] =~ /^-/ then
      #  next
      #end
      cnt = 0
      prj['assigned_todos'].each do |todo|
        if todo['content'].match(/^[0-9]/)
          cnt = cnt + 1
        end
      end

      if cnt == 0
        next
      end
      title = '     ' + prj['bucket']['name'] + ': ' + prj['name']
      puts title.gsub("\n", ' ')
      prj['assigned_todos'].each do |todo|
        if !todo['content'].match(/^[0-9]/)
          next
        end
        itm = (
          todo['content'] +
          $larr +
          prj['name'] +
          ' (' + prj['bucket']['name']+')')
          #"                                    pfy:#{_account_to_id(account)}:#{prj['bucket']['id']}:#{prj['id']}:#{todo['id']}")
        puts itm.gsub("\n", ' ')
      end
      puts '                  '
      puts '                  '
    end
  end
end

class Puffy < Thor
  @@username = ENV['BASECAMP_LOGIN']
  @@password = ENV['BASECAMP_PASSWORD']

  desc "targets", "Show all targets"
  def targets
    puts $cfg['targets'].keys
  end

  desc "my", "Выводит список моих тасков в бэйскампе из кэша"
  def my(*args)
    if args.size == 0
      args = $cfg['accounts'].keys
    end
    format_my_list args
  end

  desc "browserall", "Открыть Все туду листы в браузере"
  def browserall
    $cfg['targets'].each do |key, itm|
      `google-chrome https://basecamp.com/#{itm['account']}/projects/#{itm['project']}#todolist_#{itm['todolist']}`
    end
    `i3-workspace www`
  end

  desc "browser", "Открыть туду лист в браузере"
  def browser list
    itm = $cfg['targets'][list]
    `google-chrome https://basecamp.com/#{itm['account']}/projects/#{itm['project']}#todolist_#{itm['todolist']}`
    `i3-workspace www`
  end

  desc "fetchmytasks", "Забирает задачи из бэйскампа и кладёт в кэш"
  def fetchmytasks
    data = {}

    $cfg['accounts'].each do |name, account|
      res = HTTParty.get("https://basecamp.com/#{account['id']}/api/v1/people/#{account['me']}/assigned_todos.json",
                    :basic_auth => { :username => @@username, :password => @@password },
                    :headers => {
                      "User-Agent" => 'Bubujka.Todo.Creator (zendzirou@gmail.com)',
                      "Content-Type" => "application/json"} )
      if res.code == 200
        t = JSON.parse( res.body )
        t.each do |prj|
          if prj['remaining_count'] > prj['assigned_todos'].size
            res2 = HTTParty.get(prj['url'],
                          :basic_auth => { :username => @@username, :password => @@password },
                          :headers => {
                            "User-Agent" => 'Bubujka.Todo.Creator (zendzirou@gmail.com)',
                            "Content-Type" => "application/json"} )
            if res2.code == 200
              t2 = JSON.parse( res2.body )
              prj['assigned_todos'] = t2['todos']['remaining'].keep_if do |itm|
                r = false
                if itm['assignee']
                   r =itm['assignee']['id'] == account['me']
                end
                r
              end
            end
          end
        end
        data[name] = t
      else
        puts "Что то пошло не так"
        die 1
      end
    end
    _write_my_file data
  end

  desc "commenttodo", "Откомментировать задачу"
  def commenttodo uid, comment, subscribers
    nothing, account, project, todolist, todo = uid.split(':')
    subscribers = subscribers.split(',').map(&:to_i)
    # https://basecamp.com/2704671/projects/6605804/todos/118942695
    p = HTTParty.post("https://basecamp.com/#{account}/api/v1/projects/#{project}/todos/#{todo}/comments.json",
                  :basic_auth => { :username => @@username, :password => @@password },
                  :body => {
                    "content" => comment,
                    "subscribers" => subscribers
                  }.to_json,
                  :headers => {
                    "User-Agent" => 'Bubujka.Todo.Creator (zendzirou@gmail.com)',
                    "Content-Type" => "application/json"} )
  end


  desc "sync", "Синхронизировать незалитые таски в бэйскамп (если инет не работал)"
  def sync
    fetchmytasks

    Dir[File.expand_path("~/.puffy")+"/*"].each do |pth|
      info = YAML.load_file(pth)
      tgt = $cfg['targets'][info[:target]]
      data = {}
      data["content"] = info[:text]
      if tgt['assignee']
        data["assignee"] = { "type"=>"Person", "id"=>tgt['assignee'] }
      end
      data = data.to_json
      p = HTTParty.post("https://basecamp.com/#{tgt['account']}/api/v1/projects/#{tgt['project']}/todolists/#{tgt['todolist']}/todos.json",
                    :basic_auth => { :username => @@username, :password => @@password },
                    :body => data,
                    :headers => {
                      "User-Agent" => 'Bubujka.Todo.Creator (zendzirou@gmail.com)',
                      "Content-Type" => "application/json"} )
      if p.code == 201
        File.unlink pth
      end
    end
  end

  desc "create TARGET TEXT", "Create task in target"
  def create target, text
    unless($cfg['targets'].keys.include? target)
      puts "Fucked target!"
      exit 1
    end
    info = { target: target, text: text }

    backup_file_name = Time.now.to_f.to_s
    backup_file_name = File.expand_path("~/.puffy/#{backup_file_name}")
    File.open(backup_file_name, 'w') {|f| f.write(info.to_yaml) }

    tgt = $cfg['targets'][info[:target]]
    data = {}
    data["content"] = info[:text]
    if tgt['assignee']
      data["assignee"] = { "type"=>"Person", "id"=>tgt['assignee'] }
    end
    data = data.to_json
    p = HTTParty.post("https://basecamp.com/#{tgt['account']}/api/v1/projects/#{tgt['project']}/todolists/#{tgt['todolist']}/todos.json",
                  :basic_auth => { :username => @@username, :password => @@password },
                  :body => data,
                  :headers => {
                    "User-Agent" => 'Bubujka.Todo.Creator (zendzirou@gmail.com)',
                    "Content-Type" => "application/json"} )
    if p.code == 201
      puts "All good"
      File.unlink backup_file_name
      exit 0;
    end
    exit 2
  end
end
Puffy.start
```
{% endraw %}