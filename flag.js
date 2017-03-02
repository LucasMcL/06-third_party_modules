'use strict'

const chalk = require('chalk')
const STARS_AND_RED = chalk.white.bgBlue(' *'.repeat(7) + ' ') + chalk.bgRed(' '.repeat(35))
const STARS_AND_WHITE = chalk.white.bgBlue(' ' + ' *'.repeat(6) + '  ') + chalk.bgWhite(' '.repeat(35))
const LONG_WHITE = chalk.bgWhite(' '.repeat(50))
const LONG_RED = chalk.bgRed(' '.repeat(50))

console.log(STARS_AND_RED)
console.log(STARS_AND_WHITE)
console.log(STARS_AND_RED)
console.log(STARS_AND_WHITE)
console.log(STARS_AND_RED)
console.log(STARS_AND_WHITE)
console.log(STARS_AND_RED)
console.log(LONG_WHITE)
console.log(LONG_RED)
console.log(LONG_WHITE)
console.log(LONG_RED)
console.log(LONG_WHITE)
console.log(LONG_RED)

