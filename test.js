require('dotenv').config()
const YaDisk = require('ya-disk');
const fs = require('fs')
const { request } = require('https');
const { parse } = require('url');

var date = new Date().toLocaleDateString()
var time = new Date().toLocaleTimeString()

filename = `RESERVE: ${date} | ${time}`
console.log(filename)

YaDisk.resources.create(process.env.ACCEPT_TOKEN, `disk:/SAVE_RESERVING_COPIES/${filename}`);

//YaDisk.upload.link(process.env.ACCEPT_TOKEN, `disk:/SAVE_RESERVING_COPIES/${filename}`, true)

(async () => {
    try {
      const { href, method } = await YaDisk.upload.link(process.env.ACCEPT_TOKEN, `disk:/SAVE_RESERVING_COPIES/${filename}/pattern.json`, true);
      const fileStream = fs.createReadStream('./pattern.json');
      const uploadStream = request({ ...parse(href), method });
  
      fileStream.pipe(uploadStream);
      fileStream.on('end', () => uploadStream.end());
    } catch (error) {
      console.error(error);
    }
  })();