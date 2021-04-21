---
layout: bin
name: beta-push-roles
---

```sh
#!/bin/bash
cd ~/.db/beta/server.configs
git pull
cd -
cp -r roles/* ~/.db/beta/server.configs/roles
cd -
git status
```
