---
lang: bash
layout: bin
name: run_clean-chrome
title: Запустить хром через socks5 туннель
---
{% raw %}
```bash
#!/bin/bash
. ~/.bashrc

k9 chromium-browser

chromium-browser \
  --disable-background-networking \
  --disable-gpu \
  --proxy-server="socks5://localhost:9999" \
  --proxy-bypass-list="$(cat ~/.db/wiki/noproxy.md)" \
  https://ifconfig.io

i3-workspace www
```
{% endraw %}