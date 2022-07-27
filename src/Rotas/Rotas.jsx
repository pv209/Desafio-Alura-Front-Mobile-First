import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Pets from "../Pages/Pets/Pets";
import Login from "../Pages/Login/Login";
import Mensagem from "../Pages/Mensagem/Mensagem"
import Perfil from "../Pages/Perfil/Perfil"

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/cadastrar" element={<Cadastro/>} />
      <Route exact path="/pets" element={<Pets/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/mensagem" element={<Mensagem/>} />
      <Route exact path="/perfil" element={<Perfil/>} />
    </Routes>
  );
}
