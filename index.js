var pump = require('pump')
var urlTar = require('url-tar')
var tarDat = require('tar-dat')

module.exports = function (urls, archive, cb) {
  // urls => dat
  pump(urlTar(urls), tarDat(archive), cb)
}
