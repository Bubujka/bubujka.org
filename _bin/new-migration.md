---
layout: bin
name: new-migration
---

```
#!/bin/bash
knex migrate:make "$1"
vim-last migrations
```
