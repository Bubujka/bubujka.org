---
lang: ruby
layout: bin
name: asna
refs: []
tags:
- api
- asana
title: Программа для записи задач в asana из консоли
---
{% raw %}
```ruby
#!/usr/bin/env ruby
require "rubygems"
require 'yaml'
require 'asana'
require 'thor'
require 'pp'
require 'colored'
$cfg = YAML.load_file(File.expand_path("~/.asnarc"))

Asana.configure do |client|
  client.api_key = $cfg['api_key']
end

class Asna < Thor
  no_commands{
    def targets
      $cfg['targets']
    end
    def target name
      targets[name]
    end
    def target_exists? name
      !target(name).nil?
    end
    def find_project id
      Asana::Project.find(id.to_i)
    end
    def save_task_data workspace, opts
      unless File.exists?(File.expand_path "~/.asna/")
        FileUtils.mkdir_p(File.expand_path "~/.asna/")
      end
      File.open(File.expand_path("~/.asna/#{Time.now.to_f.to_s}"), 'w') {|f| f.write({ workspace: workspace, opts: opts}.to_yaml) }
    end
  }

  desc "target_list", "Выводит список целей"
  def target_list
    $cfg['targets'].each do |k,v|
      puts k
    end
  end

  desc 'add TARGET TASK', 'Добавляет таск в выбранный target'
  def add target_name, task_text
    unless target_exists? target_name
      puts "Target '#{target_name}' not exists!".red
      exit 1;
    end
    t = target(target_name)
    opts = {:name => task_text}
    if t['project']
      opts['projects'] = [t['project'].to_i]
    end
    opts['assignee'] = t['user']

    save_task_data t['workspace'], opts
  end

  desc 'cron', 'Синхронизирует все таски с сервером асаны'
  def cron
    Dir[File.expand_path("~/.asna")+"/*"].each do |pth|
      t = YAML.load_file(pth)

      w = Asana::Workspace.find(t[:workspace])
      w.create_task(t[:opts])

      File.unlink pth
    end
  end


  desc 'tree', 'Показывает всё дерево workspace, проектов и людей. Нужно для первичной настройки'
  def tree
    Asana::Workspace.all.each do |w|
      puts "#{w.name.green}: #{w.id}"

      puts '  Projects:'.blue
      w.projects.each do |p|
        puts "    #{p.name}: #{p.id}"
      end

      puts '  Users:'.blue
      w.users.each do |u|
        puts "    #{u.name}: #{u.id}"
      end
    end
  end
end
Asna.start
```
{% endraw %}