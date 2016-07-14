
# Urls to Dat

Put files from urls into a hyperdrive archive

See other modules for more info:

* [tar-dat](https://github.com/joehand/tar-dat): streams tarball into dat
* [url-tar](https://github.com/joehand/url-tar): puts body from url into tar

## Usage

`urlDat(urls, archive, cb)`

```javascript

var hyperdrive = require('hyperdrive')
var swarm = require('hyperdrive-archive-swarm')
var memdb = require('memdb')
var urlDat = require('url-dat')

var drive = hyperdrive(memdb())
var archive = drive.createArchive()

var urls = ['http://google.com', 'http://npmjs.com']

urlDat(urls, archive, function (err) {
  if (err) throw err
  archive.finalize(function (err) { 
    if (err) throw err
    console.log('sharing key: ', archive.key.toString('hex'))
    swarm(archive)
  })
})
```