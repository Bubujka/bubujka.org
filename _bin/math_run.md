---
layout: bin
name: math_run
---

```sh
#!/bin/bash
set -o errexit
math_question.py
$1 &
PID=$!
bash -c "sleep 180 ; kill $PID" &
```
