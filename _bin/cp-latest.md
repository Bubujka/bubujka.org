---
lang: bash
layout: bin
name: cp-latest
refs: []
tags: []
title: Скопировать самый новый файл из каталога в другое место
---
{% raw %}
```bash
#!/bin/bash
cp "$(ls -t "$1" | head -n1)" "$2"
```
{% endraw %}