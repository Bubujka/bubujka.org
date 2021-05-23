---
lang: bash
layout: bin
name: fmts
refs: []
tags:
- text
title: Реформатировать текст, но не объединяя строки
---
{% raw %}
```bash
#!/bin/bash
cat /dev/stdin | fmt -s -w $1
```
{% endraw %}