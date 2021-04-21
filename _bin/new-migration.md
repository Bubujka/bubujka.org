---
layout: bin
name: new-migration
---

```sh
#!/bin/bash
knex migrate:make "$1"
vim-last migrations
```
