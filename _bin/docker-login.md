---
lang: bash
layout: bin
name: docker-login
refs: []
tags:
- docker
title: Запустить экземпляр контейнера с bash
---
{% raw %}
```bash
#!/bin/bash
docker exec -ti $1 bash
```
{% endraw %}