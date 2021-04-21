---
layout: bin
name: git-ac
---

```sh
#!/bin/bash
git add . --all
git commit -m "$(hostname):$(pwd) update - $(date)"
```
