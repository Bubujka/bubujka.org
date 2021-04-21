---
layout: bin
name: composer-ungit-vendor
---

```sh
#!/bin/bash
# Вычистить .git репы из vendor у composer
find vendor/ -type d -name ".git" -exec rm -rf {} \;
```
