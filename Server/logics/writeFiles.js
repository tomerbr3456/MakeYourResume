const fs = require('fs')
const path = require('path')

function writeFiles(files, body) {
  Object.keys(files).forEach(key => {
    if (key === 'projectPic') {
      if (Array.isArray(files[key]))
        req.files[key].forEach(picture => {
          fs.writeFile(`${path.dirname(__dirname)}/site/src/images/${picture.name}.jpg`, picture.data, 'binary', function (err) {
            console.log(err)
          })
        })
    }
    else
      fs.writeFile(`${path.dirname(__dirname)}/site/src/images/${files[key].name}.jpg`, files[key].data, 'binary', function (err) {
        console.log(err)
      })
  })
  fs.writeFile(`${path.dirname(__dirname)}/site/src/global/siteDetails.json`, body, 'utf8', function (err) {
    console.log(err)
  })
}
module.exports = { writeFiles }