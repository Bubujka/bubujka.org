---
lang: bash
layout: bin
name: civ1
refs: []
tags:
- game
- dosbox
title: Запустить первую цивилизацию в досбокс
---
{% raw %}
```bash
#!/bin/bash
dosbox -c 'mount d: ~/.dosbox' -c 'd:' -c 'cd CIVILI~1' -c 'CIV.bat'
```
{% endraw %}