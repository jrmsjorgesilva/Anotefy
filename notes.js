const fs = require("fs");

//RETORNA AS ANOTAÇÕES

const getNotes = () => {
  return "your notes...";
};

//ADICIONA ANOTAÇÕES

const addNote = (title, description) => {
  const notes = loadNotes();

  //CHECA SE HÁ DUPLICIDADE NO TITULO E NA DESCRIÇÃO
  const duplicateNote = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      description: description
    });

    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("note title already exists");
  }
};

//REMOVE AS ANOTAÇÕES

const removeNote = title => {
  console.log("removendo anotação ", title);
};

//GRAVA AS ANOTAÇÕES NA PASTA RAIZ
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//CARREGA AS ANOTAÇÕES
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//EXPORTA AS FUNÇÕES PARA APP.JS
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
