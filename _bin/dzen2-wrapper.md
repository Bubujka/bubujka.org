---
layout: bin
name: dzen2-wrapper
---

```
#!/bin/bash
# notify-send из stdin.
notify-send "Dzen2 wrapper" "$(cat /dev/stdin)"
```
