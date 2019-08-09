import adder from './js/adder'
import logger from './js/logger'
import './css/style.css'

console.log('=====>>>> App start!')

const result = adder(10, 2)

logger(`The result is: ${result}`)


if (module.hot)       // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef