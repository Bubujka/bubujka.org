---
important: true
lang: bash
layout: bin
name: cup
refs: []
tags:
- cleanup
title: Заняться наведением порядка всюду
---
{% raw %}
```bash
#!/bin/bash

cleanup.py | tee -a  ~/.db/wiki/plan.md
projects_without_next.py | tee -a  ~/.db/wiki/plan.md
open-in-gvim ~/.db/wiki/plan.md
```
{% endraw %}