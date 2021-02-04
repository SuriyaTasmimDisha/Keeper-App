import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteRecord, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNote((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea newNote={addNote} />
      {noteRecord.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            removeNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
