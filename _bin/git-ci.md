---
lang: bash
layout: bin
name: git-ci
refs: []
tags: []
title: Закоммитить то что есть
todo:
- Картинку всё же сохранять и ассоциировать с коммитом
---
{% raw %}
```bash
#!/bin/bash
if [ "$#" -eq 0 ]; then
      echo "Illegal number of parameters"
      exit
fi
COMMIT="$@"
git commit -m "$COMMIT"

exit
DIR=`pwd`


mkdir /tmp/webshot 2> /dev/null
cd /tmp/webshot
rm * 2> /dev/null

mplayer -vo png -frames 40 tv:// 2> /dev/null > /dev/null
mv 00000040.png 00000040.png_bak
rm 000000*.png

cd ~/.db/history/camshot
DIRECTORY=`date +%F | sed 's/-/\//g'`
mkdir -p $DIRECTORY 2> /dev/null
cd $DIRECTORY

NAME=`date +%X | sed 's/:/-/g'`_`cat /tmp/webshot/00000040.png_bak | md5sum |  head -c10`
NAME_HIGH=$NAME.png
NAME_LOW=$NAME.jpg

convert -quality 70 -flop /tmp/webshot/00000040.png_bak $NAME_LOW

cd ~/.db/history/camshot
echo "http://cs.bubujka.org/$DIRECTORY/$NAME_LOW" | xc

cd "$DIR"

COMMIT="$@"
git commit -m "$COMMIT

Photo: http://cs.bubujka.org/$DIRECTORY/$NAME_LOW $CAMERA"

s3cmd sync $HOME/.db/history/camshot/ s3://cs.bubujka.org
```
{% endraw %}