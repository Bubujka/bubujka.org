---
lang: bash
layout: bin
name: ssh_chromium
title: Запустить хром через socks5 туннель
---
{% raw %}
```bash
#!/bin/bash
. ~/.bashrc

k9 google-chrome

google-chrome  https://ifconfig.io \
  --proxy-server="socks5://localhost:9998"
  #--proxy-bypass-list="$(cat ~/.db/wiki/noproxy.md)" \
i3-workspace www
```
{% endraw %}