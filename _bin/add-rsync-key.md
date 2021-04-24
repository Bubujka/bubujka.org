---
lang: bash
layout: bin
name: add-rsync-key
refs: []
tags:
- rsync
- api
- ssh
title: Добавить ключ на rsync.net
---
{% raw %}
```bash
#!/bin/bash
cat - | ssh $1 "dd of=$2/.ssh/authorized_keys oflag=append conv=notrunc"
```
{% endraw %}