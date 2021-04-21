---
layout: bin
name: git-clear
---

```
#!/bin/bash
IFS=$'\n'
for pth in `git status | grep deleted  | sed 's/^\tdeleted: *//'`
do
        git rm "$pth"
done
```
