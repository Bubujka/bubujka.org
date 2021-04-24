---
lang: bash
layout: bin
name: undoc
title: Вырезать из php файла все комментарии
---
{% raw %}
```bash
#!/bin/bash
TMPFILE=`mktemp`
cat | php -w >$TMPFILE
php-cs-fixer fix $TMPFILE
cat $TMPFILE;
rm $TMPFILE;
```
{% endraw %}