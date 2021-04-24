---
lang: php
layout: bin
name: urlencode
title: Заурлэнкодить поток ввода
---
```php
#!/usr/bin/env php
<?php
echo urlencode(file_get_contents('php://stdin'));
```