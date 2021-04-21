---
layout: bin
name: fmts
---

```
#!/bin/bash
# Реформатировать текст, но не объединяя строки
cat /dev/stdin | fmt -s -w $1
```
