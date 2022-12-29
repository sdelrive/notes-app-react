import "./App.scss";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Test from "./components/Test/Test";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotesPage from "./pages/NotesPages/NotesPage";
import { useSelector } from "react-redux";
function App() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="app">
      <Routes>
        {authStatus === "not-authenticated" ? (
          <Route path="/auth/*" element={<Login />} />
        ) : (
          <>
            <Route path="/*" element={<Navigate to="/notes" />} />
            <Route path="/notes" element={<NotesPage />} />
          </>
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
}

export default App;
