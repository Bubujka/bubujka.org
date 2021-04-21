---
layout: bin
name: dzen2-wrapper
---

```sh
#!/bin/bash
# notify-send из stdin.
notify-send "Dzen2 wrapper" "$(cat /dev/stdin)"
```
