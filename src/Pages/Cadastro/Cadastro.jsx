import "../Home/home.css";
import Header from "../../Components/Header";
import logo from "../Imagens/Logosvg.svg";
import "./cadastro.css";
import Footer from "../../Components/Footer";
import forma2 from "../Imagens/Forma 2cadas.png"

function Cadastro() {
  return (
    <div className="main__cadastro">
      <Header />
      <div className="cadastro">
        <img src={logo} alt="logo" className="logo__cadastro" />
        <p className="cadastro__text">Ainda não tem cadastro?</p>{" "}
        <p className="cadastro__text">
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </p>
        <img src={forma2} className="cadastro__forma2" alt="forma2" />
        <div className="form">
        <label className="cadastro__label">Email</label>
           <input type="text" className="cadastro__inpt" placeholder="Escolha seu melhor email" />
           <label className="cadastro__label">Nome</label>
           <input type="text" className="cadastro__inpt" placeholder="Digite seu nome completo" />
           <label className="cadastro__label">Senha</label>
           <input type="password" className="cadastro__inpt" placeholder="Crie uma senha" />
           <label className="cadastro__label">Confirme sua senha</label>
           <input type="password" className="cadastro__inpt" placeholder="Repita a senha criada a cima" />
           <button className="btn__inicial">Cadastrar</button>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Cadastro;
