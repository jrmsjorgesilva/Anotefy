const fs = require("fs");

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
  const notes = loadNotes();

  const remove = notes.filter(note => {
    return note.title !== title;
  });

  if (remove.length < notes.length) {
    saveNotes(remove);
    console.log("removendo anotação ", title);
  } else {
    console.log("Não existe nenhuma anotação com o titulo ", title);
  }
};

//EXIBE AS ANOTAÇÕES POR TITULO

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach(note => {
    console.log(note.title);
  });
};

//REALIZA LEITURA DAS DESCRIÇÕES DAS ANOTAÇÕES POR TITULO
const readNote = title => {
  const notes = loadNotes();

  const noteToRead = notes.find(note => {
    return note.title === title;
  });

  if (noteToRead) {
    console.log(title, " : ", noteToRead.description);
  } else {
    console.log("Não há nenhuma anotação com o titulo ", title);
  }
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
