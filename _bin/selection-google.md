---
layout: bin
name: selection-google
---

```sh
#!/bin/bash
URL=$(xclip -o | urlencode)
google-chrome "https://www.google.ru/#newwindow=1&q=$URL"
i3-workspace www
```
