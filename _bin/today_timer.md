---
layout: bin
name: today_timer
---

```sh
#!/bin/bash
watch -n 1 'today_stats.py today  | expand  -t 20'

```
