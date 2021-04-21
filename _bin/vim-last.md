---
layout: bin
name: vim-last
---

```sh
#!/bin/bash
if [ -n $1 ]
then
    cd $1
fi
vim `ls -t | head -n1`
```
