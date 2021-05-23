---
lang: python
layout: bin
name: fuckify.py
refs: []
tags:
- text
title: Дополнить все строки от stdin пробелами, чтобы оно было выровнено справа
---
{% raw %}
```python
#!/usr/bin/env python3

from sys import stdin, argv

def main():
    lines = stdin.readlines()
    longest = max([len(t.rstrip()) for t in lines])

    for line in lines:
        left = len(line.rstrip()) - len(line.strip())
        print((line.strip()+(" "*left)).rjust(longest, " "))

if __name__ == '__main__':
    main()
```
{% endraw %}