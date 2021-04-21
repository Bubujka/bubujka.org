---
layout: bin
name: rgit
---

```sh
#!/bin/bash
ARGS=$(printf '"%s" ' "$@")
CMD="cd hello.git && git $ARGS"
ssh ct.beta.agency "$CMD"
```
