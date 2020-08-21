## 将包变成全局的
- 先创建可执行的脚本 #! /usr/bin/env node  xia.js
- 配置package.json 中的bin字段   npm init -y
- npm link 链接到本地环境 (默认以name为基准)  报错使用 npm unlink