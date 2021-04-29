---
lang: bash
layout: bin
name: real_ssh_chromium
refs:
- k9
- i3-workspace
title: Запустить хром через socks5 туннель
---
{% raw %}
```bash
#!/bin/bash
. ~/.bashrc

k9 chromium-browser

chromium-browser \
  https://ifconfig.io \
  --proxy-server="socks5://localhost:9999" \
  --proxy-bypass-list="$(cat ~/.db/wiki/noproxy.md)" \
i3-workspace www
```
{% endraw %}