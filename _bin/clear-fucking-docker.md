---
lang: bash
layout: bin
name: clear-fucking-docker
refs: []
tags:
- docker
title: Удалить все контейнеры и вольюмы
---
{% raw %}
```bash
#!/bin/bash
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
```
{% endraw %}