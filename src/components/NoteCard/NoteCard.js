import "./NoteCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function NoteCard({ title, content, date }) {
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
          <FontAwesomeIcon className="trash-can" icon={faTrashCan} />
          <FontAwesomeIcon className="edit" icon={faPenToSquare} />
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
}
