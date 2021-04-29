---
lang: bash
layout: bin
name: br
refs:
- i3-workspace
tags:
- browser
title: Открыть ссылку в браузере
---
{% raw %}
```bash
#!/usr/bin/env bash
if [ "$#" -eq 0 ]; then
  LINK=`cat /dev/stdin`
  google-chrome "$LINK" > /dev/null 2>&1  &
else
  google-chrome "$1" > /dev/null 2>&1  &
fi
i3-workspace www
```
{% endraw %}