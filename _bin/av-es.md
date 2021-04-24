---
lang: bash
layout: bin
name: av-es
refs: []
tags:
- ansible
title: Зашифровать в ansible как строку поток ввода
---
{% raw %}
```bash
#!/bin/bash
cat - | ansible-vault encrypt_string --stdin-name=$1
```
{% endraw %}