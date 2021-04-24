---
lang: bash
layout: bin
name: upgrade-nvm
title: Команда для обновления nvm
---
{% raw %}
```bash
#!/bin/bash

cd ~/.nvm
git fetch origin
git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" origin`
```
{% endraw %}