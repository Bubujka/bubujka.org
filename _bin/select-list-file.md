---
lang: ruby
layout: bin
name: select-list-file
title: Выбрать через dmenu один из списков
---
{% raw %}
```ruby
#!/usr/bin/env ruby
prefix = '/home/bubujka/.db/lists/'
files = Dir[prefix+'*']
names = files.map { |f| File.basename f }
Dir.chdir(prefix)
def dmenu_gets prefix, variants, rows
  `ls | /home/bubujka/.bu.bin/bin/dmenu-wrapper #{prefix} #{rows} `.chomp
end
wiki_file = dmenu_gets "File", names, 40
puts wiki_file
unless wiki_file.empty?
  file = wiki_file
  system "gvim--remote-send \":sp #{File.expand_path(file).gsub(' ', '\\ ')}<CR>\""
  # Это у меня хоткей для перехода к первому рабочему столу - там вим
  system "i3-workspace vim"
end
```
{% endraw %}