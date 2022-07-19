import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cadastro from "../Pages/Cadastro/Cadastro";

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/cadastrar" element={<Cadastro/>} />
    </Routes>
  );
}
