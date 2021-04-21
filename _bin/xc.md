---
lang: bash
layout: bin
name: xc
tags:
- clipboard
- linux
title: Скопировать stdin или переданный аргумент в буфер обмена
---
```bash
#!/bin/bash
if [ $# -eq 0 ]; then
  cat /dev/stdin | xclip -selection pri
  xclip -o | xclip -selection cli
else
  echo "$1" | xclip -selection pri
  xclip -o | xclip -selection cli
fi
```