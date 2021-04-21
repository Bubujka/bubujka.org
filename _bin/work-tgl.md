---
layout: bin
name: work-tgl
---

```sh
#!/bin/bash
. ~/.bashrc
tgl puffy -w 281169
if [[ $# -eq 0 ]] ; then
  dmenu-timer
fi
```
