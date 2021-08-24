---
lang: bash
layout: bin
name: dmenu-timer
refs:
- tt
tags:
- timetracking
- pomodoro
title: Запустить таймер (pomodoro) через dmenu
---
{% raw %}
```bash
#!/bin/bash
TIMES="10m
20m
25m
30m
60m
120m"
TEXT="$(echo $TIMES | sed -s 's/ /\n/g' | dmenu-wrapper 'На сколько включить таймер:')"
if [ ! -n "$TEXT" ]; then
  echo "Aborted" | dzen2-wrapper red ; exit 1
fi
tt "$TEXT"
```
{% endraw %}