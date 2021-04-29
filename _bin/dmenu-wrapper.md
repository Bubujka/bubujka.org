---
lang: bash
layout: bin
name: dmenu-wrapper
refs: []
tags:
- dmenu
title: Враппер для dmenu, который устанавливает стиль и кодировку
---
{% raw %}
```bash
#!/bin/bash
LINES="-l 42"
if [ "$#" -gt 1 ]; then
  LINES="-l $2"
fi

BOTTOM=""
if [ "$#" -eq 3 ]; then
  BOTTOM=" -b "
fi

cat /dev/stdin | dmenu $BOTTOM $LINES -nb "#000"  -nf "#fff" -p "$1:" -i -fn Pt\ Sans\ 20
```
{% endraw %}