---
layout: bin
name: sort-by-extension
---

```sh
#!/bin/bash
for file in * ; do
  extension="${file##*.}"
  mkdir -p "$extension" 2> /dev/null
  mv "$file" "$extension"
done
```
