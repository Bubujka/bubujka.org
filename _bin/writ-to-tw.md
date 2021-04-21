---
lang: bash
layout: bin
name: writ-to-tw
title: Записать через dmenu в taskwarrior
---
```bash
#!/bin/bash
. ~/.bashrc
TARGET="$(dmenu-wrapper 'Task?' 0)"
if [ ! -n "$TARGET" ]; then
  echo "Aborted" | dzen2-wrapper red ; exit
fi

task add $TARGET
echo "Writed" | dzen2-wrapper green
```