---
layout: bin
name: av-es
---

```sh
#!/bin/bash
cat - | ansible-vault encrypt_string --stdin-name=$1
```
