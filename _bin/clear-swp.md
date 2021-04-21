---
layout: bin
name: clear-swp
---

```sh
#!/bin/bash
# Удалить временные файлы от vim
find . -type f -iname '*.sw*' -delete
```
