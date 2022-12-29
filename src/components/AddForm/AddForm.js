import React from "react";
import "./AddForm.scss";

import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import { openModal } from "../../store/ui/modalSlice";
export default function AddForm({ open, setOpen, notes, setNotes, contenido }) {
  const editNote = useSelector((state) => state.modal.value);
  const [note, setNote] = useState("");

  if (!open) {
    return null;
  }

  const handleNoteForm = (e) => {
    const title = "Nota";
    const date = "12 de diciembre";
    const content = e.target.value;
    setNote({ title: title, date: date, content: content });
    console.log(notes);
  };
  const handleAdd = (e) => {
    if (note.length == 0) {
      return alert("que hace");
    }
    e.preventDefault();
    setNotes([...notes, note]);
    console.log(notes);

    localStorage.setItem("notas", JSON.stringify(notes));
    setOpen(false);
  };

  return (
    <>
      <div className="blur-background"></div>
      <div className="add-form">
        <label htmlFor="newNote">Nueva nota</label>
        <textarea
          defaultValue={contenido}
          onChange={handleNoteForm}
          id="newNote"
          name="newNote"
          rows="4"
          cols="50"
        />
        <Button handle={handleAdd} label="Añadir" />
      </div>
    </>
  );
}

// Para el elemento de edicion, deberia hacer otro reducer para el caso en que quiera editar, no agregar una nueva, y cargar
// el contenido de la nota al formulario modal.
