---
lang: bash
layout: bin
name: youtube-latest-video
tags:
- video
- youtube
title: Загрузить на ютуб последнее видео с экрана
---
{% raw %}
```bash
#!/bin/bash
cd ~/.db/history/video
yb $(ls -t *.mkv | head -1)
```
{% endraw %}