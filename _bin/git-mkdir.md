---
layout: bin
name: git-mkdir
---

```
#!/bin/bash
mkdir -p "$1"
touch "$1/.gitkeep"
git add -f "$1/.gitkeep"
```
