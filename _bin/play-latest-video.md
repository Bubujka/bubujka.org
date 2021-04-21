---
layout: bin
name: play-latest-video
---

```
#!/bin/bash
cd ~/.db/history/video
mplayer $(ls -t *.mkv | head -1)
```
