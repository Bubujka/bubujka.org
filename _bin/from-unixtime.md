---
//refs: []
//tags:
- text
- date
//title: Превратить unixtime to iso8601
lang: php
layout: bin
name: from-unixtime
---
{% raw %}
```php
#!/usr/bin/env php
<?php
date_default_timezone_set('Europe/Moscow');
array_shift($argv);
if(count($argv)){
  foreach($argv as $v){
    printf("%s: %s\n", $v, date('c', $v));
  }
}else{
  $v = time();
  printf("%s: %s\n", $v, date('c', $v));
}
//1384963500
```
{% endraw %}