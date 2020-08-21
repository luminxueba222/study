#! /usr/bin/env node

console.log('xia-cli')

const { Command } = require('commander');
const program = new Command();

function initArgv(cmd) {
    let argv ={}
    cmd.options.forEach(o => {
        let key = o.long.slice(2)
        cmd[key] ? argv[key]=cmd[key]:null
    })
    return argv
}
// program
//     .command('create <app-name>')
//     .description('create a app')
//     .option('-d')

program
    .command('config [value]')
    .description('inspect and modify the config haha')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path> <value>')
    .option('-d, --delete <path>', 'delete option from config')
    .action((value, cmd) => {

        // 调用config模块去实现
        console.log(value, initArgv(cmd));
    })

program
    .version(`xia-cli@${require('../package.json').version}`)
    .usage(`<command> [option]`)

program.parse(process.argv);