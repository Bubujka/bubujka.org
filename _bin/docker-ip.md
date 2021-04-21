---
layout: bin
name: docker-ip
---

```sh
#!/bin/bash
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'  "$1"
```
