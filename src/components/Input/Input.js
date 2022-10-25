import "./Input.scss";

export default function Input({ label, type, placeholder, name, id }) {
  return (
    <div className="input">
      <label htmlFor={name}>
        <p>{label}</p>
      </label>
      <input type={type} placeholder={placeholder} name={name} id={id} />
    </div>
  );
}
