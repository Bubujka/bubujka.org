---
layout: bin
name: kill-web
---

```sh
#!/bin/bash
killall -KILL -w node
killall -KILL -w php7.1
killall -KILL -w php
killall -KILL -w gulp
killall -KILL -w mailcatcher
killall -KILL -w ng
```