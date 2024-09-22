import fs from "fs";
import process from "process";
import axios from "axios";

const handleOutput = (data, outputPath) => {
  if (outputPath) {
    fs.writeFile(outputPath, data, "utf8", (err) => {
      if (err) {
        console.log(`Couldn't write file ${outputPath}. ${err}`);
        process.exit(1);
      }
    });
  } else console.log(data);
};

const cat = (readPath, outputPath) => {
  fs.readFile(readPath, "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading ${readPath}. ${err}`);
      process.exit(1);
    } else {
      handleOutput(data, outputPath);
    }
  });
};

const webCat = async (readPath, outputPath) => {
  try {
    const res = await axios.get(readPath);
    handleOutput(res.data, outputPath);
  } catch (err) {
    console.log(`Fetching data from ${readPath} failed. ${err}`);
    process.exit(1);
  }
};

let readPath = null;
let outputPath = null;

if (process.argv[2] === "--out") {
  outputPath = process.argv[3];
  readPath = process.argv[4];
} else readPath = process.argv[2];

if (readPath.slice(0, 4) === "http") webCat(readPath, outputPath);
else cat(readPath, outputPath);
