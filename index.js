var pump = require('pump')
var urlTar = require('url-tar')
var tarDat = require('tar-dat')

module.exports = function (urls, archive, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
  }
  // urls => dat
  pump(urlTar(urls, opts), tarDat(archive, opts), cb)
}
