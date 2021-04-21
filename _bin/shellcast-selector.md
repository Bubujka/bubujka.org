---
layout: bin
name: shellcast-selector
---

```sh
#!/bin/bash
. ~/.bashrc
~/.bu.bin/bin/list-shellcast > ~/.shellcasts.txt
siterunner.py ~/.shellcasts.txt
rm ~/.shellcasts.txt
```
