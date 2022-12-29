import React, { useEffect } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import Add from "../../components/Add/Add";
import AddForm from "../../components/AddForm/AddForm";
import Layout from "../../components/Layout/Layout";
import NoteCard from "../../components/NoteCard/NoteCard";
import "./NotesPage.scss";

const notas = [
  {
    title: "Nota",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
    date: "11 de agosto",
    id: 1,
  },
  {
    title: "Nota",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
    date: "11 de agosto",
    id: 2,
  },
  {
    title: "Nota",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
    date: "11 de agosto",
    id: 3,
  },
  {
    title: "Nota",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
    date: "11 de agosto",
    id: 4,
  },
  {
    title: "Nota",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
    date: "11 de agosto",
    id: 5,
  },
  {
    title: "Nota",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis atque officia ipsa quos tenetur accusamus?",
    date: "11 de agosto",
    id: 6,
  },
];
export default function NotesPage() {
  const openModal = useSelector((state) => state.modal.open);

  useEffect(() => {
    setNewForm(openModal);
  }, [openModal]);
  const [newForm, setNewForm] = useState(openModal);

  const [notes, setNotes] = useState(notas);

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
    <Layout>
      <div className="NotesContainer">
        {notes.map((nota, index) => {
          const { title, content, date, id } = nota;
          return (
            <NoteCard
              title={title + " " + id}
              content={content}
              date={date}
              open={newForm}
              setOpen={setNewForm}
              key={title + index}
              id={id}
              notes={notes}
              setNotes={setNotes}
            />
          );
        })}
        <AddForm
          // contenido={content ? content : ""}
          open={newForm}
          setOpen={setNewForm}
          notes={notes}
          setNotes={setNotes}
        />
      </div>
      <Add open={newForm} setOpen={setNewForm} />
    </Layout>
  );
}
