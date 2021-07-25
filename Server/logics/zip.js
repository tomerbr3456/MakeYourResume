const path = require('path')
const archiver = require('archiver');

function zip(res) {
  const archive = archiver('zip');

  archive.on('error', function (err) {
    res.status(500).send({ error: err.message });
  });
  archive.on('end', function () {
    console.log('Archive wrote %d bytes', archive.pointer());
  });
  res.attachment('archive-name.zip');
  archive.pipe(res);
  archive.directory(path.dirname(__dirname) + '/site', false);
  archive.finalize();
}
module.exports = { zip }

