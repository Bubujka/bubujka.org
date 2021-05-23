---
lang: bash
layout: bin
name: check-all
refs: []
tags:
- git
title: Скрипт проверяет что в git-репозиториях из папки /home/www/ нет незафиксированных
  изменений
---
{% raw %}
```bash
#!/bin/bash

for dir in /home/www/*;
do
	cd $dir;
	if [ -d .git ]
	then
		if [ -n "$(git status --short)" ]
		then
			echo
			echo $dir
			git status --short
		fi
	fi
done
```
{% endraw %}