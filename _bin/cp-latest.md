---
layout: bin
name: cp-latest
---

```
#!/bin/bash
# Скопировать самый новый файл из каталога в другое место
cp "$(ls -t "$1" | head -n1)" "$2"
```
