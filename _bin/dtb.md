---
important: true
lang: bash
layout: bin
name: dtb
refs: []
tags:
- docker
title: Сбилдить Dockerfile и сразу его запустить
---
{% raw %}
```bash
#!/bin/bash
docker build --pull . -f $1 -t test $@
dt
```
{% endraw %}