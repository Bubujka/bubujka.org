---
layout: bin
name: lowercase-files
---

```sh
#!/bin/bash
for file in "$@";
do
  rename 's/(.*)/\L$1/' "$file"
done
```
