---
lang: js
layout: bin
name: domain-to-ips
refs: []
tags:
- domain
title: Преобразовать домены из stdin в ip-адреса
---
{% raw %}
```js
#!/usr/bin/env node
const dns = require('dns');
const readline = require('readline');
const chalk = require('chalk');

dns.setServers(['8.8.8.8']);

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (domain) => {
  domain = domain.trim();
  dns.lookup(domain, 4, (err, ip) => {
    if(err){
      console.log(chalk.red('NOT_FOUND'), domain); // eslint-disable-line
    }else{
      console.log(chalk.green(ip), domain); // eslint-disable-line
    }
  });
});
```
{% endraw %}