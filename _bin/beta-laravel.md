---
lang: bash
layout: bin
name: beta-laravel
refs: []
tags:
- laravel
title: Сделать сайт из корпоративного ларавеля
---
{% raw %}
```bash
#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail

git clone corp-gitlab:beta/laravel.git "$1"
mkdir -p "$1"
cd "$1"
git checkout betaagency
rm -rf .git
composer install
cp .env.example .env
./artisan key:generate
./artisan storage:link
yarn
```
{% endraw %}