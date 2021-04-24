---
lang: bash
layout: bin
name: activity-tail
refs: []
tags: []
title: Показать лог моей активности за рабочим местом
---
{% raw %}
```bash
#!/bin/bash
tail -f ~/.db/activity/activity.log
```
{% endraw %}