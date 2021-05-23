---
lang: bash
layout: bin
name: diablo-2
refs: []
tags:
- game
title: Запустить вторую диаблу
---
{% raw %}
```bash
#!/bin/bash
WINEPREFIX=~/.diablo/$1 wine ~/.diablo/$1/drive_c/Program\ Files/Diablo\ II/Diablo\ II.exe -w -skiptobnet
```
{% endraw %}