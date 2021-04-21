---
layout: bin
name: lowercase-files
---

```
#!/bin/bash
for file in "$@";
do
  rename 's/(.*)/\L$1/' "$file"
done
```
