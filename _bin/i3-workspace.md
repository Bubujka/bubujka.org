---
layout: bin
name: i3-workspace
---

```
#!/bin/bash
i3-msg -- workspace --no-auto-back-and-forth $1 2>&1 > /dev/null
```
