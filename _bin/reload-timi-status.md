---
layout: bin
name: reload-timi-status
---

```
#!/bin/bash
. ~/.bashrc
killall -KILL show-timi-status
killall -KILL dzen2
nohup show-timi-status &
```
