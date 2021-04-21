---
layout: bin
name: mysql-recreate
---

```
#!/bin/bash
mysqladmin drop -f "$1"
mysqladmin create "$1"
```
