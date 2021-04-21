---
layout: bin
name: mail-me-if-something-wrong
---

```sh
#!/bin/bash

. ~/.bu-config
if [ -n "$(~/.bu.bin/bin/check-all)" ] 
then 
  ~/.bu.bin/bin/check-all | mailx -s "Files changed :-O" -- $ADMIN_EMAIL
fi
```
