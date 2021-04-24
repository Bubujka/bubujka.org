---
lang: bash
layout: bin
name: add-image-to-anki
title: Добавить изображение в anki
---
{% raw %}
```bash
#!/bin/bash
if [ "$(hostname)" == "titty" ] ;
then
  xdotool mousemove 1854 593
  xdotool click 1
  sleep 0.2
  xdotool mousemove 830 621
  xdotool click 1
  sleep 0.2
  xdotool mousemove 1205 912
  xdotool click 1
else
  xdotool mousemove 1530 500
  xdotool click 1
  sleep 0.2
  xdotool mousemove 830 486
  xdotool click 1
  sleep 0.2
  xdotool mousemove 1068 766
  xdotool click 1
fi
```
{% endraw %}