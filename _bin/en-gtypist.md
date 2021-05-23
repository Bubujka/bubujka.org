---
lang: bash
layout: bin
name: en-gtypist
refs: []
tags:
- touchtype
title: Запустить тренировку слепого набора на английский язык
---
{% raw %}
```bash
#!/bin/bash
LANG=en_US gtypist -b -e 0 -S --scoring=cpm
```
{% endraw %}