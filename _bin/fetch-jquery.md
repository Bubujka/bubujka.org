---
lang: bash
layout: bin
name: fetch-jquery
refs: []
tags:
- webdev
title: Скачать свежий jquery и положить его рядом
---
{% raw %}
```bash
#!/bin/bash
curl http://code.jquery.com/jquery-latest.min.js > jquery.js
```
{% endraw %}