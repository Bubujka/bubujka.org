---
lang: bash
layout: bin
name: battery-info
refs: []
tags:
- hw
title: Получить информацию по батарее
---
{% raw %}
```bash
#!/bin/bash
upower -i /org/freedesktop/UPower/devices/battery_BAT0
```
{% endraw %}