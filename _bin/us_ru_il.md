---
layout: bin
name: us_ru_il
---

```sh
#!/bin/bash
setxkbmap -layout us,ru,il -option grp:shift_toggle
notify-flash "i3" "Il"
```