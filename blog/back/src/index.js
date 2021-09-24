//이 파일에서만 no-global-assign ESLint 옵션을 빌활성화한다.
//eslint-disable no-global-assign
require = require('esm')(module /*, options */)
module.exports = require('./main')