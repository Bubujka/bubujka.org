---
//refs: []
//tags: []
//title: Захэшировать пароль в bcrypt
lang: php
layout: bin
name: bcrypt.php
---
{% raw %}
```php
#!/usr/bin/env php
<?php
printf("hash for \"%s\": %s \n", $argv[1], password_hash($argv[1], PASSWORD_BCRYPT));
```
{% endraw %}