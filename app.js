const config = require("./config");
const fs = require("fs");

const fileData = JSON.parse(
  fs.readFileSync(config.jsonDataIndexFile).toString()
);
console.log(fileData["content"]);

// fileData.forEach((module) => {
//   console.log(module);
// });
