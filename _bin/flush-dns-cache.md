---
layout: bin
name: flush-dns-cache
---

```
#!/bin/bash
# Сбросить кэш днс
sudo killall -HUP dnsmasq
sudo systemd-resolve --flush-caches
```
