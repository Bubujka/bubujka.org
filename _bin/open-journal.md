---
layout: bin
name: open-journal
---

```sh
#!/bin/bash
gvim--remote-send ':sp /home/bubujka/.db/wiki/journal.md<CR>'
i3-workspace vim
```
