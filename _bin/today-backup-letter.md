---
lang: bash
layout: bin
name: today-backup-letter
title: Получить букву, по которой удобно хранить бэкап
---
{% raw %}
```bash
#!/bin/bash
l_128='h'; l_64='g'; l_32='f'; l_16='e'; l_8='d'; l_4='c'; l_2='b'; l_1='a';
days=$(($(date --utc --date "$1" +%s)/86400))

for i in 128 64 32 16 8 4 2 1; do
  if [ $(($days % $i)) -eq 0 ]; then
    vari="l_$i"; echo ${!vari}; exit;
  fi
done
```
{% endraw %}