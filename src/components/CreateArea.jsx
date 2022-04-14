import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={(event) => props.handleChange(event)}
          value={props.newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(event) => props.handleChange(event)}
          value={props.newNote.content}
        />
        <button type="button" onClick={() => props.addToList()}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
