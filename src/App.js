import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [note, setNote] = useState("");
  const [noteitem, setnoteitem] = useState([]);

  function handlechange(event) {
    var { value } = event.target;
    setNote(value);
  }

  function handleclick(event) {
    setnoteitem((prevValue) => {
      return [...prevValue, note];
    });

    // setInputText("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Type Your Note"
          onChange={handlechange}
          value={note}
        />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {noteitem.map((todoitem) => (
            <ListItem text={todoitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

