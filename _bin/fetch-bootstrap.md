---
lang: bash
layout: bin
name: fetch-bootstrap
refs: []
tags:
- bootstrap
- webdev
title: Скачать стили первого бутстрапа с гитхаба
---
{% raw %}
```bash
#!/bin/bash
wget https://raw.githubusercontent.com/twbs/bootstrap/v1.4.0/bootstrap.min.css
```
{% endraw %}