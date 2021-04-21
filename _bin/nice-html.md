---
layout: bin
name: nice-html
---

```
#!/bin/bash
# Оформляет html красиво
cat - | tidy -raw -i -q -w 250 --show-body-only yes
```
