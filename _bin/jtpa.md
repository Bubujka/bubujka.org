---
layout: bin
name: jtpa
---

```sh
#!/usr/bin/env php
<?php
var_export(json_decode(file_get_contents("php://stdin"), true));
```
