---
layout: bin
name: wiki-commit-and-push
---

```sh
#!/bin/bash
. ~/.bashrc
notify-send "Wiki sync..."
cd ~/.db/wiki
commit-and-push
notify-send "Wiki synced =)"
```
