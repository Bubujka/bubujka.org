---
layout: bin
name: open-in-gvim
---

```sh
#!/bin/bash

gvim--remote-send "<esc><esc>:sp $1<CR>"
i3-workspace vim
```