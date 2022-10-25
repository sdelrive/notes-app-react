import React from "react";
import Add from "../components/Add/Add";
import NoteCard from "../components/NoteCard/NoteCard";
import "./Notes.scss";

export default function Notes() {
  const notas = [
    {
      title: "Nota",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
      date: "11 de agosto",
    },
    {
      title: "Nota",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
      date: "11 de agosto",
    },
    {
      title: "Nota",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
      date: "11 de agosto",
    },
    {
      title: "Nota",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
      date: "11 de agosto",
    },
    {
      title: "Nota",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
      date: "11 de agosto",
    },
    {
      title: "Nota",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
      date: "11 de agosto",
    },
  ];

  return (
    <>
      <div className="NotesContainer">
        {notas.map((nota, index) => {
          const { title, content, date } = nota;
          return (
            <NoteCard
              title={title + " " + index}
              content={content}
              date={date}
            />
          );
        })}
      </div>
      <Add />
    </>
  );
}
