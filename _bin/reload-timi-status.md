---
layout: bin
name: reload-timi-status
---

```sh
#!/bin/bash
. ~/.bashrc
killall -KILL show-timi-status
killall -KILL dzen2
nohup show-timi-status &
```
