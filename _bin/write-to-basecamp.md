---
lang: bash
layout: bin
name: write-to-basecamp
refs:
- dzen2-wrapper
- puffy
- dmenu-wrapper
tags:
- basecamp
title: Записать задачу из dmenu в бэйскамп
---
{% raw %}
```bash
#!/bin/bash
. ~/.bashrc

TARGET="$(puffy targets | dmenu-wrapper 'Куда' 20)"
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