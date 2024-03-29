---
lang: js
layout: bin
name: tasklists
title: Список моих списков задач в бэйскампе
---
{% raw %}
```js
#!/usr/bin/env node
var fs = require('fs');
var yaml = require('js-yaml');
var _ = require('underscore');

var cfg = yaml.safeLoad(fs.readFileSync(process.env.HOME+'/.puffyrc', 'utf8'));
var tasks = require(process.env.HOME+'/.puffy-my-tasks.json');
var spawn = require('child_process').spawn;


function dmenu(list, title, lines, cb){
  var p = spawn('dmenu',
                [
                '-l', lines, '-nb', '#000', '-nf', '#fff', '-p', title, '-i', '-fn', 'Pt Sans 20'
                ]
                );


  p.stdin.write(_.keys(list).sort().join('\n'));
  p.stdin.end();
  var d = '';
  p.stdout.on('data', function(dat){
    d+=dat;
  });
  p.on('exit', function(){
    cb(d, list[d]);
  });
}

var targets =  _
  .chain(cfg.targets)
  .map(function(value, key){
    var t =  _.clone(value);
    t.key = key;
    return t;
  })
  .indexBy('key')
  .value();

function id_to_account(id){
  for(var i in cfg.accounts){
    if(cfg.accounts[i].id.toString() === id.toString()){
      return i;
    }
  }
  return null;
}
dmenu(targets, "Какой проект выбираем:", 30, function(tkey, tval){

    if(!tkey){
      return;
    }
  var lists = _.chain(tasks[id_to_account(tval.account)])
  .filter(function(itm){
    return itm.bucket.id.toString() === tval.project.toString();
  })
  .map(function(itm){
    return _.pick(itm, 'id','name');
  }).indexBy('name').mapObject(function(itm){
    return itm.id;
  }).value();
  dmenu(lists,  tkey+": какой лист открыть:", 30, function(lname, lid){
    if(lname){
    spawn('google-chrome',
          ['https://basecamp.com/'+tval.account+'/projects/'+tval.project+'/todolists/'+lid]);
    spawn('i3-workspace', ['www']);
    }
  });
});
```
{% endraw %}