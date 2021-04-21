---
layout: bin
name: clear-swp
---

```
#!/bin/bash
# Удалить временные файлы от vim
find . -type f -iname '*.sw*' -delete
```
