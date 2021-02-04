import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function handClick() {
    setExpanded(!isExpanded);
  }

  const [note, addNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    addNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={handClick}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.newNote(note);
              addNote({
                title: "",
                content: ""
              });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
