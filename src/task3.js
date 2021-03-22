import csv from 'csvtojson';
import fs from 'fs';
import { PATHS } from './constants';

const writeText = fs.createWriteStream(PATHS.DEFAULT_TEXT);
fs.createReadStream(PATHS.DEFAULT_CSV)
  .pipe(csv())
  .on('data', (data) =>  writeText.write(data))
  .on('error', (er) => console.log(er));