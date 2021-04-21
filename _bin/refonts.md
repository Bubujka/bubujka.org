---
lang: bash
layout: bin
name: refonts
title: Переиндексировать шрифты
---
```bash
#!/bin/bash
cd ~/.fonts
mkfontscale
mkfontdir
xset fp rehash
```