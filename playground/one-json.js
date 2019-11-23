const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holliday"
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("one-JSON.json", bookJSON);

const dataBuffer = fs.readFileSync("one-JSON.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
// const parsedJSON = JSON.parse("one-JSON.json");
data.name = "jorge";
data.planet = "earth";
data.age = 31;
fs.writeFileSync("one-JSON.json", JSON.stringify(data));
console.log(data.planet);
