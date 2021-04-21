---
layout: bin
name: docker-test
---

```sh
#!/bin/bash
docker commit $1 test
docker run --rm -it test bash
```
