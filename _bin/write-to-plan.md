---
lang: bash
layout: bin
name: write-to-plan
title: Записать через dmenu в
---
{% raw %}
```bash
#!/bin/bash
#. ~/.bashrc
PTH=$1
TARGET="$(zenity --text 'Что записать?' --entry --width 1000 --height 150)"
if [ ! -n "$TARGET" ]; then
  echo "Aborted" | dzen2-wrapper red ; exit
fi

add_to_unsorted_section.py "- $TARGET  ($(date '+%B %e'))" $PTH

echo "Writed" | dzen2-wrapper green
```
{% endraw %}