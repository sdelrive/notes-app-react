import "./NoteCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { openModal, toggleModal } from "../../store/ui/modalSlice";
import { useDispatch } from "react-redux";
export default function NoteCard({
  title,
  content,
  date,
  id,
  notes,
  setNotes,
  open,
  setOpen,
}) {
  const dispatch = useDispatch();
  const onDelete = (e) => {
    console.log(id);
    const newNotas = notes.filter((nota) => nota.id !== id);
    setNotes(newNotas);
  };

  const onEdit = (e) => {
    dispatch(toggleModal());
  };
  return (
    <div className="note-card">
      <div className="note-title">
        <h2> {title}</h2>
      </div>
      <div className="note-text">
        <p>{content}</p>
      </div>
      <div className="note-date">
        <div className="notes-config">
          <FontAwesomeIcon
            className="trash-can"
            icon={faTrashCan}
            onClick={onDelete}
          />
          <FontAwesomeIcon
            className="edit"
            icon={faPenToSquare}
            onClick={onEdit}
          />
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
}
