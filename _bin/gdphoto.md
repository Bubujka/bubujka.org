---
lang: bash
layout: bin
name: gdphoto
refs: []
tags: []
title: Стилизовать картинку с дизерингом и заливкой фона
todo: Добавить демку
---
{% raw %}
```bash
#!/bin/bash
convert $1 -resize 570x570! -level 0%,100%,2  -ordered-dither o8x8 -fill '#0046df' -opaque white  gd-$1
```
{% endraw %}