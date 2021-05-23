---
lang: bash
layout: bin
name: composer-ungit-vendor
refs: []
tags:
- php
- composer
title: Вычистить .git репы из vendor у composer
---
{% raw %}
```bash
#!/bin/bash
find vendor/ -type d -name ".git" -exec rm -rf {} \;
```
{% endraw %}