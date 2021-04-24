---
lang: bash
layout: bin
name: volume
title: Установить громкость в консоли
---
{% raw %}
```bash
#!/bin/bash
amixer set Master $1
```
{% endraw %}