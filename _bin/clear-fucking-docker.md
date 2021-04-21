---
layout: bin
name: clear-fucking-docker
---

```
#!/bin/bash
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
```
