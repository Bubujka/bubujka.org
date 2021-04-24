---
lang: bash
layout: bin
name: backup-mysql
refs: []
tags:
- mysql
title: Сделать бэкап базы данных локально
---
{% raw %}
```bash
#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail

mkdir -p ~/sql-backups || true
mysqldump "$1" | gzip > "$HOME/sql-backups/$1-$(date +%s).sql.gz"
```
{% endraw %}