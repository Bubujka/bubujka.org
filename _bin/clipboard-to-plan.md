---
lang: bash
layout: bin
name: clipboard-to-plan
refs: []
tags:
- clipboard
- plan
title: Записать содержимое буфера обмена в plan-файл
---
{% raw %}
```bash
#!/bin/bash
. ~/.bashrc
echo >> "$1"
echo "# $(date)" >> "$1"
echo "$(xclip -o)" >> "$1"
echo "" >> "$1"
echo "" >> "$1"
echo "Copied: $(xclip -o | cut -b 1-50 | sed 's/[^[:print:]]//g')" | dzen2-wrapper green
```
{% endraw %}