---
lang: bash
layout: bin
name: bigger
refs: []
tags:
- filesystem
title: Вывести список файлов, которые больше определённого размера
---
{% raw %}
```bash
#!/bin/bash
if [ "$#" -eq 0 ]; then
  echo '$ bigger 1024c # В байтах'
  echo '$ bigger 1024k # В килобайтах'
  echo '$ bigger 1024M # В мегабайтах'
  exit
fi
find -type f -size +$1 -printf "%s:%h/%f\n" | sort
```
{% endraw %}