import "./App.scss";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Test from "./components/Test/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Notes from "./pages/Notes";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
