---
lang: bash
layout: bin
name: create-gallery
refs: []
tags:
- html
- website
- image
title: Создать галерею фоточек из папки
---
{% raw %}
```bash
#!/bin/bash
source ~/.bashrc
export DISPLAY=":0"
DATE=`date +%F | sed 's/:/-/g'`
DIRECTORY=${DATE}_`head -c10 /dev/urandom | md5sum | head -c6`
NAME="$1"
shift

mkdir $DIRECTORY
mkdir $DIRECTORY/tn
mkdir $DIRECTORY/orig

echo "<html><head><meta charset='utf8'><title>$NAME</title><style>img{border-radius: 4px}</style></head><body><center>" > $DIRECTORY/index.html
echo "<h1>$NAME</h1><h2>$DATE</h2>" >> $DIRECTORY/index.html
echo "Ресайз картинок"
for file in "$@"
do
  echo " -$file"
  convert "$file" -resize 900x5000\> -quality 75 "$DIRECTORY/tn/$file"
  cp "$file" $DIRECTORY/orig
  echo "<a target='_blank' href='orig/$file'><img src='tn/$file'></a><br><br>" >> $DIRECTORY/index.html
done
echo "</center></body></html>" >> $DIRECTORY/index.html


mv $DIRECTORY ~/.db/gallery
cd ~/.db/gallery

echo "http://gg.bubujka.org/$DIRECTORY" | xc
echo "http://gg.bubujka.org/$DIRECTORY   -  $NAME" >> ~/.db/wiki/gallery
echo "Загрузка на сервер..."
s3cmd sync ./ s3://gg.bubujka.org

```
{% endraw %}