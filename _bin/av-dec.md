---
layout: bin
name: av-dec
---

```sh
#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail
ansible-vault decrypt $(find . -iname vault.yml)
```