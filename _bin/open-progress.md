---
layout: bin
name: open-progress
---

```sh
#!/bin/bash
rm ~/.db/wiki/.*swp
gvim--remote-send ':sp /home/bubujka/.db/wiki/progress.md<CR>'
sleep 0.3
i3-workspace vim
```