---
lang: bash
layout: bin
name: check-vcs-on-domain
refs: []
tags:
- git
- svn
- security
- domain
title: Проверить - есть ли уязвиость git / svn на домене
---
{% raw %}
```bash
#!/bin/bash

echo; echo http://$1 git
wget -O - http://$1/.git/config 2> /dev/null | head

echo; echo http://$1 svn
wget -O - http://$1/.svn/entries 2> /dev/null | head

echo; echo https://$1 git
wget -O - https://$1/.git/config 2> /dev/null | head

echo; echo https://$1 svn
wget -O - https://$1/.svn/entries 2> /dev/null | head


echo; echo http://www.$1 git
wget -O - http://www.$1/.git/config 2> /dev/null | head

echo; echo http://www.$1 svn
wget -O - http://www.$1/.svn/entries 2> /dev/null | head

echo; echo https://www.$1 git
wget -O - https://www.$1/.git/config 2> /dev/null | head

echo; echo https://www.$1 svn
wget -O - https://www.$1/.svn/entries 2> /dev/null | head
```
{% endraw %}