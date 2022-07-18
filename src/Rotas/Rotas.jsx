import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
  );
}
