---
lang: bash
layout: bin
name: clear-swp
refs: []
tags:
- vim
- cleanup
title: Удалить временные файлы от vim
---
{% raw %}
```bash
#!/bin/bash
find . -type f -iname '*.sw*' -delete
```
{% endraw %}