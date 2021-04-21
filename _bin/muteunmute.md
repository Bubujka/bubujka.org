---
layout: bin
name: muteunmute
---

```
#!/bin/bash
amixer -D pulse set Master 1+ toggle
```
