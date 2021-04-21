---
layout: bin
name: timi-stop
---

```sh
#!/bin/bash
echo "Stopped" | dzen2 -p 1 -bg "#ee0000" -fg "#ffffff" 
. ~/.bashrc
timi stop
reload-timi-status
```
