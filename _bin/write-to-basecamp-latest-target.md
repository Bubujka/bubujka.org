---
lang: bash
layout: bin
name: write-to-basecamp-latest-target
refs:
- dzen2-wrapper
- puffy
- dmenu-wrapper
- write-to-basecamp
tags:
- basecamp
title: Записать задачу из dmenu в тот же basecamp что и в прошлый раз
---
{% raw %}
```bash
#!/bin/bash
. ~/.bashrc
AGE=$(($(date +%s) - $(stat -L --format %Y ~/.puffy-latest-target)))
echo $AGE
if [ $AGE -gt 180 ] ; then
  write-to-basecamp
  exit
fi

TARGET=$(cat ~/.puffy-latest-target)

if [ ! -n "$TARGET" ]; then
  echo "Aborted" | dzen2-wrapper red ; exit
fi

echo $TARGET > ~/.puffy-latest-target
TEXT="$(echo | dmenu-wrapper 'bc '$TARGET)"
if [ ! -n "$TEXT" ] ; then
  echo "Aborted" | dzen2-wrapper red ; exit
fi

puffy create "$TARGET" "$TEXT"
echo "Writed" | dzen2-wrapper green

```
{% endraw %}