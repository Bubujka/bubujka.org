---
lang: bash
layout: bin
name: diablo-2-plugy
refs: []
tags:
- game
title: Запустить Plugy версию diablo2
---
{% raw %}
```bash
#!/bin/bash
cd ~/.d2plugy/drive_c/Diablo2/Mod\ PlugY/
WINEPREFIX=~/.d2plugy wine PlugY.exe -w &
```
{% endraw %}