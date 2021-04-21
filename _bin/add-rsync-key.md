---
layout: bin
name: add-rsync-key
---

```sh
#!/bin/bash
cat - | ssh $1 "dd of=$2/.ssh/authorized_keys oflag=append conv=notrunc"
```
