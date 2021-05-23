---
lang: bash
layout: bin
name: dt
refs: []
tags:
- docker
title: Запустить контейнер под именем test с башем, а потом его удалить
---
{% raw %}
```bash
#!/bin/bash
docker run --rm -it test bash
```
{% endraw %}