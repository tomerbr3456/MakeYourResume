const express = require('express')
const upload = require('express-fileupload')
const morgan = require('morgan');
const setRequestsAccessHeader = require('./corsMiddelwares')
const { writeFiles } = require('./logics/writeFiles');
const { zip } = require('./logics/zip');
const app = express()

app.listen(process.env.PORT || 5001, () => {
  console.log(`u r listen on port ${process.env.PORT || 5001}`)
})

app.use(setRequestsAccessHeader)
app.use(express.json());
app.use(upload({
  createParentPath: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(morgan('dev'));

app.post('/getYourSite', (req, res) => {
  writeFiles(req.files, req.body.body)
})
app.get('/download', (req, res) => {
  zip(res)
});




