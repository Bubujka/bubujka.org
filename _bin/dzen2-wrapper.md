---
lang: bash
layout: bin
name: dzen2-wrapper
refs: []
tags: []
title: notify-send из stdin.
---
{% raw %}
```bash
#!/bin/bash
notify-send "Dzen2 wrapper" "$(cat /dev/stdin)"
```
{% endraw %}