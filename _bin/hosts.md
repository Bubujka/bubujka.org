---
layout: bin
name: hosts
---

```sh
#!/bin/bash
vim ~/.db/hosts.d/my
cat ~/.db/hosts.d/* | sudo tee /etc/hosts > /dev/null
```
