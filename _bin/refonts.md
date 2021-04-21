---
layout: bin
name: refonts
---

```sh
#!/bin/bash
# Переиндексировать шрифты
cd ~/.fonts
mkfontscale
mkfontdir
xset fp rehash
```
