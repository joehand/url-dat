var hyperdrive = require('hyperdrive')
var swarm = require('hyperdrive-archive-swarm')
var memdb = require('memdb')
var urlDat = require('url-dat')

var drive = hyperdrive(memdb())
var archive = drive.createArchive()

var urls = ['http://google.com', 'http://dat-data.com']

urlDat(urls, archive, function (err) {
  if (err) throw err
  archive.finalize(function (err) {
    if (err) throw err
    console.log('sharing key: ', archive.key.toString('hex'))
    var s = swarm(archive)
    s.on('connection', function () {
      console.log('hew connection')
    })
  })
})
