---
layout: bin
name: muteunmute
---

```sh
#!/bin/bash
amixer -D pulse set Master 1+ toggle
```
