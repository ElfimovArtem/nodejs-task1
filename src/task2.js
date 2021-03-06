const csv = require('csvtojson');
const fs = require('fs');
const paths = require('./constants');

const writeText = fs.createWriteStream(paths.DEFAULT_TEXT);
fs.createReadStream(paths.DEFAULT_CSV)
  .pipe(csv())
  .on('data', (data) =>  writeText.write(data))
  .on('error', (er) => console.log(er));