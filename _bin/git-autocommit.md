---
layout: bin
name: git-autocommit
---

```
#!/bin/bash -xe
git add . -A
test -z "$(git status --porcelain)" ||  git commit -m "$@"
```
