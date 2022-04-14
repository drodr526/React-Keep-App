import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [newNote, setNote] = useState({
    title: "",
    content: ""
  });
  let [list, setList] = useState([]);

  function handleChange(event) {
    let { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(list);
  }

  function addToList() {
    setList((prevValue) => {
      return [...prevValue, newNote];
    });
    setNote({ title: "", content: "" });
  }

  function deleteFromList(idToDelete) {
    setList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== idToDelete;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleChange={handleChange}
        addToList={addToList}
        newNote={newNote}
      />
      {list.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteFromList={deleteFromList}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
