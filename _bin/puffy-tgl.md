---
layout: bin
name: puffy-tgl
---

```sh
#!/bin/bash
. ~/.password
. ~/.rvm/environments/default
echo "updating..." | dzen2-wrapper
~/.bu.bin/bin/puffy sync
tgl
```
