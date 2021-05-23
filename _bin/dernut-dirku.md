---
lang: bash
layout: bin
name: dernut-dirku
refs: []
tags:
- mikrotik
title: Выключить и включить интерфейс у микротика из консоли
---
{% raw %}
```bash
#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail
ssh mikrotik-office /interface ethernet disable ether1-gateway
ssh mikrotik-office /interface ethernet enable ether1-gateway
```
{% endraw %}