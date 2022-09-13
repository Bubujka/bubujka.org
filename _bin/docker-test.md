---
important: true
lang: bash
layout: bin
name: docker-test
refs: []
tags:
- docker
title: Пометить слой у докера алиасом и запустить в нём баш
---
{% raw %}
```bash
#!/bin/bash
docker commit $1 test
docker run --rm -it test bash || docker run --rm -it test sh
```
{% endraw %}