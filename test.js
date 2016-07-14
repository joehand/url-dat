var hyperdrive = require('hyperdrive')
var memdb = require('memdb')
var test = require('tape')
var urlDat = require('.')

test('puts urls into archive', function (t) {
  var drive = hyperdrive(memdb())
  var archive = drive.createArchive()
  var urls = ['http://dat-data.com']

  urlDat(urls, archive, function (err) {
    t.error(err)
    t.pass('calls callback')
    archive.finalize(function (err) {
      if (err) throw err
      t.ok(archive.key.toString('hex'), 'has key')
      archive.get(0, function (err, entry) {
        if (err) throw err
        t.ok(entry.name.indexOf('dat-data') > -1, 'gets entry')
        t.end()
      })
    })
  })
})
