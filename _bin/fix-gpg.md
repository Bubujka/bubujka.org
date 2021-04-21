---
layout: bin
name: fix-gpg
---

```sh
#!/bin/bash
gnome-keyring-daemon --replace --daemonize --components=secrets,ssh,pcks11
```
