---
layout: bin
name: mgd
---

```sh
#!/bin/bash

for line in $(cat ~/.mgd);
do
  br "$line" &
done
```
