---
lang: bash
layout: bin
name: REKBD
title: Сбросить настройки раскладки
---
```bash
#!/bin/bash
setxkbmap -layout us,ru -option grp:shifts_toggle
xmodmap ~/.xmodmap
xset r rate 200 50
```