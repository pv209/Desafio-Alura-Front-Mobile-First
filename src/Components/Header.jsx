import "../Pages/Home/home.css";
import casa from "../Pages/Imagens/Casa.png";
import forma1 from "../Pages/Imagens/Forma 1.png";
import mensagem from "../Pages/Imagens/Mensagens.png";
import { Link } from "react-router-dom";
import logoHeader from "../Pages/Imagens/logo__header.png";

function Header() {
  return (
    <div class="header">
      <Link to="/">
        <a>
          <img src={casa} alt="casa" class="casa" />
        </a>
      </Link>
      <img src={logoHeader} alt="logo" className="logo__header" />
      <a>
        <img src={mensagem} alt="mensagem" class="mensagem" />
      </a>
      <div class="forma1">
        <img src={forma1} alt="forma" class="forma" />
      </div>
    </div>
  );
}

export default Header;
