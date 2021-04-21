---
layout: bin
name: box
---

```sh
#!/bin/bash

LIST=$(date +%F_%H-%M-%S.txt)
cat - | ssh prj@abox.simmi "cat - > archivebox/lists/$LIST; tsp /home/prj/dl $LIST"
```