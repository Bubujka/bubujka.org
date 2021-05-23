---
lang: bash
layout: bin
name: tt
refs: []
tags:
- pomodoro
- timetracking
title: Запустить таймер на какой-то интервал
---
{% raw %}
```bash
#!/bin/bash
seconds=$1
if [[ $1 =~ ^.*m$ ]]; then
  let seconds="${1/m/} * 60"
fi
if [[ $1 =~ ^.*h$ ]]; then
  let seconds="${1/h/} * 3600"
fi
echo $seconds > ~/.timer
let minutes="$seconds / 60"
notify-send "Таймер запущен на $minutes минут"
```
{% endraw %}