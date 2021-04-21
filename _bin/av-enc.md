---
layout: bin
name: av-enc
---

```sh
#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail
ansible-vault encrypt $(find . -iname vault.yml)
```
