---
lang: js
layout: bin
name: domain-grep-header
refs: []
tags:
- domain
title: Вывести содержимое одного из header у списка доменов в stdin
---
{% raw %}
```js
#!/usr/bin/env node

'use strict'; // eslint-disable-line

const readline = require('readline');
const request = require('request');
const chalk = require('chalk');


const rl = readline.createInterface({
  input: process.stdin,
});
const grep = process.argv[2];

console.log(`# Searching: ${grep}`);

rl.on('line', (domain) => {
  domain = domain.trim();
  request.get(domain, { followRedirect: false }, (err, res) => {
    let key, founded;
    if (err) {
      console.log(err);
      console.log(`ERROR ${domain}`); // eslint-disable-line
    } else {
      if(res.headers[grep]){
        console.log(chalk.green(`${res.headers[grep]}`), domain); // eslint-disable-line
      }else{
        console.log(chalk.red('NOT_FOUND'), domain); // eslint-disable-line
      }
    }
  });
});

```
{% endraw %}