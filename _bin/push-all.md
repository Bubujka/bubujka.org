---
layout: bin
name: push-all
---

```sh
#!/bin/bash
for r in $(git remote); do git push $r master; done
```
