---
layout: bin
name: clear-fucking-docker
---

```sh
#!/bin/bash
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
```