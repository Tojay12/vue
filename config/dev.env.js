'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.3.10:10001"',
  // 是否开启代理, 重置后需重启vue-cli
  OPEN_PROXY: false
})
