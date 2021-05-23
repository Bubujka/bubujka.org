---
lang: bash
layout: bin
name: git-autocommit
refs: []
tags:
- git
title: Попытаться закоммитить, если есть что коммитить
---
{% raw %}
```bash
#!/bin/bash -xe
git add . -A
test -z "$(git status --porcelain)" ||  git commit -m "$@"
```
{% endraw %}