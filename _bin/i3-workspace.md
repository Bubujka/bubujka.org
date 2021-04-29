---
lang: bash
layout: bin
name: i3-workspace
refs: []
tags:
- i3
title: Поменять рабочий стол в i3wm из консоли
---
{% raw %}
```bash
#!/bin/bash
i3-msg -- workspace --no-auto-back-and-forth $1 2>&1 > /dev/null
```
{% endraw %}