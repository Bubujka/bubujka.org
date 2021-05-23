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
docker build . -f $1 -t test
dt
```
{% endraw %}