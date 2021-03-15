const csv = require('csvtojson');
const fs = require('fs');
const paths = require('./constants');

const writeText = fs.createWriteStream(paths.BASE_CSV_TEXT);
fs.createReadStream(paths.BASE_CSV_PATH)
  .pipe(csv())
  .on('data', (data) =>  writeText.write(data))
  .on('error', (er) => console.log(er));