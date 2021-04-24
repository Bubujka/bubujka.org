---
lang: bash
layout: bin
name: rekbd
title: Сбросить настройки раскладки
---
{% raw %}
```bash
#!/bin/bash
setxkbmap -layout us,ru -option grp:shifts_toggle
xmodmap ~/.xmodmap
xset r rate 200 50
```
{% endraw %}