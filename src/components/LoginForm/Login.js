import "./Login.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Login() {
  return (
    <form className="form">
      <Input
        label="Ingrese su usuario"
        type="text"
        placeholder="Usuario"
        name="user"
        id="user"
      />
      <Input
        label="Ingrese su Contraseña"
        type="text"
        placeholder="Password"
        name="pass"
        id="pass"
      />
      <div>
        <Button label="Ingresar"></Button>
      </div>
      <div className="form-login__register">
        <p>¿No estas registarado? Registrate aquí.</p>
      </div>
    </form>
  );
}
