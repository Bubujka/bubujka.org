---
layout: bin
name: play-latest-video
---

```sh
#!/bin/bash
cd ~/.db/history/video
mplayer $(ls -t *.mkv | head -1)
```
