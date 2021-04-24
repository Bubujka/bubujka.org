---
lang: bash
layout: bin
name: box
refs: []
tags:
- archive
- abox
title: Из потока ввода сохранить ссылки в персональном архиве
---
{% raw %}
```bash
#!/bin/bash
LIST=$(date +%F_%H-%M-%S.txt)
cat - | ssh prj@abox.simmi "cat - > archivebox/lists/$LIST; tsp /home/prj/dl $LIST"
```
{% endraw %}