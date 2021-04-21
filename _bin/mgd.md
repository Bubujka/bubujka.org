---
layout: bin
name: mgd
---

```
#!/bin/bash

for line in $(cat ~/.mgd);
do
  br "$line" &
done
```
