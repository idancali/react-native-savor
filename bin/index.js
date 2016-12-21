#!/usr/bin/env node

'use strict'

let commands = require('./commands')
let cli = require('savor/bin/cli')

cli.exec(commands, __dirname)
