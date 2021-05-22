/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.resolve(__dirname, '../src/assets/raw_image');
const outputDir = path.resolve(__dirname, '../src/assets/img');
const readFile = (file) => fs.readFileSync(`${inputDir}/${file}`);

const resizeImage = (file, width) => {
  const [filename, ext] = file.split(/\.(?=[^\\.]+$)/);

  sharp(readFile(file))
    .resize(width)
    .toFile(`${outputDir}/${filename}-${width}.${ext}`);

  console.log(`processed ${file} with size ${width}`);
};

const imgIsland = 'sharp_island.png';
const imgRailway = 'Fushimi_railway.jpg';

[360, 720, 1080].map((size) => resizeImage(imgIsland, size));
[240, 480, 720].map((size) => resizeImage(imgRailway, size));
