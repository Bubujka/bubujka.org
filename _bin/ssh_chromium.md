---
lang: bash
layout: bin
name: ssh_chromium
title: Запустить хром через socks5 туннель
---
```bash
#!/bin/bash
. ~/.bashrc

k9 google-chrome

chromium-browser  https://ifconfig.io

  #--proxy-server="socks5://localhost:9999" \
  #--proxy-bypass-list="$(cat ~/.db/wiki/noproxy.md)" \
i3-workspace www
```