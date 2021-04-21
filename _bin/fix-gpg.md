---
layout: bin
name: fix-gpg
---

```
#!/bin/bash
gnome-keyring-daemon --replace --daemonize --components=secrets,ssh,pcks11
```
