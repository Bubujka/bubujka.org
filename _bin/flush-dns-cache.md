---
lang: bash
layout: bin
name: flush-dns-cache
refs: []
tags:
- dns
title: Сбросить кэш днс
---
{% raw %}
```bash
#!/bin/bash
sudo killall -HUP dnsmasq > /dev/null 2>&1
sudo systemd-resolve --flush-caches > /dev/null 2>&1
echo "Возможно он сбросился)"
```
{% endraw %}