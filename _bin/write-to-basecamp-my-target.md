---
lang: bash
layout: bin
name: write-to-basecamp-my-target
tags:
- basecamp
title: Записать задачу из dmenu в личный basecamp
---
{% raw %}
```bash
#!/bin/bash
. ~/.bashrc

TEXT="$(echo | dmenu-wrapper '+ Incoming')"
if [ ! -n "$TEXT" ] ; then
  echo "Aborted" | dzen2-wrapper red ; exit
fi

puffy create "my" "$TEXT"
echo "Writed" | dzen2-wrapper green

```
{% endraw %}