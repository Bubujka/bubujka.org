---
lang: bash
layout: bin
name: git-cc
refs: []
tags:
- git
title: Закоммитить то что есть
---
{% raw %}
```bash
#!/bin/bash
if [ "$#" -eq 0 ]; then
      echo "Illegal number of parameters"
      exit
fi
DIR=`pwd`
COMMIT="$@"
git commit -m "$COMMIT"
```
{% endraw %}