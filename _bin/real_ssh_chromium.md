---
layout: bin
name: real_ssh_chromium
---

```sh
#!/bin/bash
# Запустить хром через socks5 туннель
. ~/.bashrc

k9 chromium-browser

chromium-browser \
  https://ifconfig.io \
  --proxy-server="socks5://localhost:9999" \
  --proxy-bypass-list="$(cat ~/.db/wiki/noproxy.md)" \
i3-workspace www
```