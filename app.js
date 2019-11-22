const yargs = require("yargs");
const command = process.argv[2];
// console.log(process.argv[2]);

// if (command === "add") {
//   console.log("adding note!");
// } else if (command === "remove") {
//   console.log("removing note!");
// }

//CUSTOMIZE YARGS VERSION
yargs.version("15.0.2");

//CREATE ADD COMMAND
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title"
    }
  },
  handler: () => {
    console.log("adding a new note!");
  }
});

//CREATE REMOVE COMMAND

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: () => {
    console.log("removing the note");
  }
});

// CREATE LIST COMMAND
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: () => {
    console.log("listing notes");
  }
});
// CREATE READ COMMAND
yargs.command({
  command: "read",
  describe: "read notes",
  handler: () => {
    console.log("reading notes");
  }
});

//PRINT NEW NOTE TO THE SCREEN
console.log(yargs.argv);
