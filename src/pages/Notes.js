import React from "react";

import { useState } from "react";
import Add from "../components/Add/Add";
import AddForm from "../components/AddForm/AddForm";
import NoteCard from "../components/NoteCard/NoteCard";
import "./Notes.scss";

// const notas = [
//   {
//     title: "Nota",
//     content:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
//     date: "11 de agosto",
//   },
//   {
//     title: "Nota",
//     content:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
//     date: "11 de agosto",
//   },
//   {
//     title: "Nota",
//     content:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
//     date: "11 de agosto",
//   },
//   {
//     title: "Nota",
//     content:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
//     date: "11 de agosto",
//   },
//   {
//     title: "Nota",
//     content:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
//     date: "11 de agosto",
//   },
//   {
//     title: "Nota",
//     content:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
//     date: "11 de agosto",
//   },
// ];
export default function Notes() {
  const [newForm, setNewForm] = useState(false);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notas")));
  console.log(notes);

  if (!notes) {
    return (
      <>
        <AddForm
          open={newForm}
          setOpen={setNewForm}
          notes={[]}
          setNotes={setNotes}
        />
        <Add open={newForm} setOpen={setNewForm} />
      </>
    );
  }
  return (
    <>
      <div className="NotesContainer">
        {notes.map((nota, index) => {
          const { title, content, date } = nota;
          return (
            <NoteCard
              title={title + " " + index}
              content={content}
              date={date}
              open={newForm}
            />
          );
        })}
        <AddForm
          open={newForm}
          setOpen={setNewForm}
          notes={notes}
          setNotes={setNotes}
        />
      </div>
      <Add open={newForm} setOpen={setNewForm} />
    </>
  );
}
