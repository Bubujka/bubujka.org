---
lang: bash
layout: bin
name: webcam
title: Вывести видео с веб-камеры на экран
---
{% raw %}
```bash
#!/bin/bash
cd ~/.db/photo/webcam
ffplay -window_title fzf -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 #1280x768
```
{% endraw %}