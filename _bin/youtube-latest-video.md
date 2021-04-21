---
layout: bin
name: youtube-latest-video
---

```
#!/bin/bash
# Загрузить на ютуб последнее видео с экрана
cd ~/.db/history/video
yb $(ls -t *.mkv | head -1)
```
