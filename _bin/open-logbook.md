---
layout: bin
name: open-logbook
---

```sh
#!/bin/bash


br 'https://docs.google.com/spreadsheets/d/1Oh1NDg4YkP9qZkE8YsHXQ1hDv44L8slemRDYekoxBCk/edit#gid=963352748'

#if [ "$1" = "yesterday" ];
#then
#  DATE=$(date --date='1 day ago' +%Y-%m-%d)
#else
#  DATE=$(date +%Y-%m-%d)
#fi
#
#rm ~/.db/wiki/.*swp
#if [ ! -f ~/.db/wiki/logbook/"$DATE".md ]; then
#touch ~/.db/wiki/logbook/"$DATE".md
#
#echo "# $DATE
#
### Личное
### Рабочее
#" >> ~/.db/wiki/logbook/"$DATE".md
#fi
#gvim--remote-send ":sp /home/bubujka/.db/wiki/logbook/$DATE.md<CR>"
#sleep 0.3
#i3-workspace vim
```