---
lang: bash
layout: bin
name: add-watermark
refs: []
tags:
- imagemagick
title: Добавить надпись-watermark картинкам
---
{% raw %}
```bash
#!/bin/bash
COPY="$1"
shift
mkdir watermark 2> /dev/null
for file in "$@"
do
  echo "$file -> watermark/$file"
  convert -resize 1000x1000 -quality 85 -fill white  -undercolor '#00000080' -gravity SouthEast -annotate +3+3 " $COPY " $file watermark/$file
done
```
{% endraw %}