---
layout: bin
name: rekbd
---

```sh
#!/bin/bash
# Сбросить настройки раскладки
setxkbmap -layout us,ru -option grp:shifts_toggle
xmodmap ~/.xmodmap
xset r rate 200 50
```