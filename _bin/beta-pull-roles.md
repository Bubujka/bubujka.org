---
layout: bin
name: beta-pull-roles
---

```sh
#!/bin/bash
cd ~/.db/beta/server.configs
git pull
cd -
mkdir roles || true
cp -r ~/.db/beta/server.configs/roles/* roles/
git status
```