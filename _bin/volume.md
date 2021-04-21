---
lang: bash
layout: bin
name: volume
title: Установить громкость в консоли
---
```bash
#!/bin/bash
amixer set Master $1
```