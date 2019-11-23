const yargs = require("yargs");
const notes = require("./notes");
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
      describe: "note title",
      demandOption: true,
      type: "string"
    },
    description: {
      describe: "description",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.description);
  }
});

//CREATE REMOVE COMMAND

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.removeNote(argv.title);
  }
});

// CREATE LIST COMMAND
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: () => {
    notes.listNotes();
  }
});
// CREATE READ COMMAND
yargs.command({
  command: "read",
  describe: "read notes",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.readNote(argv.title);
  }
});

//PRINT NEW NOTE TO THE SCREEN
yargs.parse();
