/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

const generateText = (text) => {
  const mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
};

const makeText = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Cannot read file: ${path}. ${err}`);
      process.exit(1);
    } else generateText(data);
  });
};

const makeURLText = async (url) => {
  try {
    const res = await axios.get(url);
    generateText(res.data);
  } catch (err) {
    console.error(`Cannot read URL: ${url}. ${err}`);
    process.exit(1);
  }
};

const [method, path] = process.argv.slice(2);

switch (method) {
  case "file":
    makeText(path);
    break;
  case "url":
    makeURLText(path);
    break;
  default:
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}
