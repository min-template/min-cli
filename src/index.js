#!/usr/bin/env node

const program = require('commander')
const config = require('../package.json')

program
  .version(config.version, '-v, --version')
  .usage('<command> [option]')

program
  .command('init')
  .description('create a webpack project')
  .action(function () {
    require('./init')
  })

program.parse(process.argv)