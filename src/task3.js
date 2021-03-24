import csv from 'csvtojson';
import fs from 'fs';

const path = {
  DEFAULT_CSV : "./files/csv.csv",
  DEFAULT_TEXT : "./files/text.txt"
};

const writeText = fs.createWriteStream(path.DEFAULT_TEXT);
fs.createReadStream(path.DEFAULT_CSV)
  .pipe(csv()).pipe(writeText)
  .on('error', (er) => console.log(er));