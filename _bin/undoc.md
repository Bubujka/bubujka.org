---
layout: bin
name: undoc
---

```sh
#!/bin/bash
# Вырезать из php файла все комментарии
TMPFILE=`mktemp`
cat | php -w >$TMPFILE
php-cs-fixer fix $TMPFILE
cat $TMPFILE;
rm $TMPFILE;
```