const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.resolve(__dirname, '../public/img');
const outputDir = inputDir;
const readFile = (file) => fs.readFileSync(`${inputDir}/${file}`);

const resizeImage = (file, width) => {
  const [filename, ext] = file.split(/\.(?=[^\\.]+$)/);

  sharp(readFile(file))
    .resize(width)
    .toFile(`${outputDir}/${filename}-${width}.${ext}`);

  console.log(`processed ${file} with size ${width}`);
};

const imgRailway = 'Fushimi_railway.jpg';

[256, 640].forEach((size) => resizeImage(imgRailway, size));
