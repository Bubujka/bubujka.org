---
lang: python
layout: bin
name: convert_doc_to_pdf.py
refs: []
tags: []
title: Сконвертировать все doc, docx файлы в каталоге в pdf
---
{% raw %}
```python
#!/usr/bin/env python3

from glob import glob
from subprocess import call
from os.path import basename, dirname
from os import chdir, getcwd
from multiprocessing import Pool

docs = glob('**/*.doc', recursive=True)
docxs = glob('**/*.docx', recursive=True)
all_files = [*docs, *docxs]
ROOT = getcwd()

def convert(pth):
    print(pth)
    chdir(ROOT)
    chdir(dirname(pth))
    call(['soffice', '--headless', '--convert-to', 'pdf', basename(pth)])

with Pool(4) as p:
    p.map(convert, all_files)
```
{% endraw %}