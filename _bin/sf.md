---
lang: python
layout: bin
name: sf
title: Сохранить файлы в хранилище файлов
---
{% raw %}
```python
#!/usr/bin/env python3
from subprocess import check_output
from sys import argv
from shutil import move
from os.path import expanduser, exists

CMD=("ls ~/.db/files |"
     "fzf +m --inline-info "
     "--preview='ls --color ~/.db/files/{} | head -$LINES'")

def fzf_get():
    return check_output(CMD, shell=True).decode('utf8').strip()

def check_argv(args):
    if len(args) == 0:
        print('Нужно передать имена файлов')
        exit(1)

    for f in args:
        if not exists(f):
            print('Файл "{}" не существует!'.format(f))
            exit(2)

def are_input_correct(args, directory):
    answ = input('Ты уверен что нужно перенести {} в {}?: '.format(args,directory))
    if answ not in ('Y', 'y', 'д', 'Д'):
        exit(3)


def move_files(files, directory):
    full_directory = expanduser("~/.db/files/{}".format(directory))
    for file in files:
        move(file, full_directory)

def main():
    args = argv[1:]
    check_argv(args)
    directory = fzf_get()
    are_input_correct(args, directory)
    move_files(args, directory)

if __name__ == '__main__':
    main()
```
{% endraw %}