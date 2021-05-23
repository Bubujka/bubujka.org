---
lang: bash
layout: bin
name: efx
refs: []
tags:
- lint
title: Прогнать stdin через eslint --fix
---
{% raw %}
```bash
#!/bin/bash
TMPFILE=$(mktemp)
cat > $TMPFILE
./node_modules/.bin/eslint --fix $TMPFILE > /dev/null
cat $TMPFILE
rm $TMPFILE
```
{% endraw %}