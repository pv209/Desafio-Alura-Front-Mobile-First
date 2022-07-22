import "../Pages/Home/home.css";
import casa from "../Pages/Imagens/Casa.png";
import forma1 from "../Pages/Imagens/Forma 1.png";
import mensagem from "../Pages/Imagens/Mensagens.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header">
      <Link to="/">
        <img src={casa} alt="casa" class="casa" />
        <img src={forma1} alt="forma" class="forma" />
        <img src={mensagem} alt="mensagem" class="mensagem" />
      </Link>
    </div>
  );
}

export default Header;
