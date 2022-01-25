---
lang: python
layout: bin
name: open-prj-wikis
refs: []
tags:
- workspace
- wiki
- prj
title: Открытие в редакторе wiki
---
{% raw %}
```python
#!/usr/bin/env python3

from sys import argv
from pyexcel_ods import get_data
from os.path import expanduser, basename, dirname, exists, isdir, islink
from subprocess import check_output

def main():
    DATA = get_data(expanduser(argv[1]))
    for row in DATA[argv[2]][1:]:
        if not len(row):
            continue
        if row[0] == '':
            continue
        check_output(["open-in-gvim", expanduser("~/.db/wiki/prj/{}.md".format(row[1]))])
if __name__ == '__main__':
    main()
```
{% endraw %}