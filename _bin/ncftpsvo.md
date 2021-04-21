---
layout: bin
name: ncftpsvo
---

```sh
#!/bin/bash
ncftp -u $(pass show svos3/login) -p $(pass show svos3/password) ftp.selcdn.ru
```
