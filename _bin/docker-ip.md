---
lang: bash
layout: bin
name: docker-ip
title: Получить ip адрес у докер контейнера
---
{% raw %}
```bash
#!/bin/bash
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'  "$1"
```
{% endraw %}