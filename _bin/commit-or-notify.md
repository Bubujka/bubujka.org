---
lang: bash
layout: bin
name: commit-or-notify
refs: []
tags:
- git
- mail
title: Попытаться закоммитить репозиторий, а если не получается - отправить письмо
  админу
---
{% raw %}
```bash
#!/bin/bash

if [ $(git status --porcelain | wc -l ) != 0 ] ;
then
  git add . --all
  git commit -m "$(hostname):$(pwd) update - $(date)"
fi

git pull

if [ $(git status --porcelain | wc -l ) != 0 ] ;
then
  TEMP=$(mktemp)
  echo "Вот что говорит \`git status\`:" >> $TEMP
  git status --porcelain >> $TEMP
  cat $TEMP | mail \
    -a "From: $MSMTP_FROM" \
    -s "Не получается в каталоге '$(hostname):$(pwd)' безболезненно сделать \`git pull\`" \
    $1

  rm $TEMP
  git add . --all
  git reset --hard HEAD
else
  git push
fi
```
{% endraw %}