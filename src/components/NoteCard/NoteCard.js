import "./NoteCard.scss";
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
        <p>{date}</p>
      </div>
    </div>
  );
}
