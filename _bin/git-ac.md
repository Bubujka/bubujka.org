---
lang: bash
layout: bin
name: git-ac
refs: []
tags:
- git
title: Закоммитить не глядя
---
{% raw %}
```bash
#!/bin/bash
git add . --all
git commit -m "$(hostname):$(pwd) update - $(date)"
```
{% endraw %}