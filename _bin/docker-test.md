---
layout: bin
name: docker-test
---

```
#!/bin/bash
docker commit $1 test
docker run --rm -it test bash
```
