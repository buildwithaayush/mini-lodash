const arrayUtils = require('./array');
const objectUtils = require('./object');
const functionUtils = require('./function')

module.exports = {
    ...arrayUtils,
    ...objectUtils,
    ...functionUtils
}