---
lang: bash
layout: bin
name: fix-tty
refs: []
tags:
- tty
title: Обновить настройки консоли
---
{% raw %}
```bash
#!/bin/bash
sudo service console-setup restart
```
{% endraw %}