import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../store/auth/authSlice";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Layout.scss";

const Layout = ({ children }) => {
  const userName = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(onLogout());
    console.log("hola");
  };

  return (
    <div className="layoutContainer">
      <div className="sidebar">
        <div className="user">
          <p>{userName}</p>
        </div>
        <div className="search">
          <Input placeholder="Nota" label="Buscar nota" />
          <Button label="Buscar" />
        </div>
        <div className="logout">
          <p onClick={handleLogout}>Cerrar sesión</p>
        </div>
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
