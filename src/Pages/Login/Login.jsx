import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import logo from "../Imagens/Logosvg.svg";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main__login">
      <Header />
      <div className="login__logo">
        <img src={logo} alt="logo" className="logo" />
        <h5 className="login__text">Já tem conta? Faça seu login:</h5>
      </div>
      <div className="login__form">
        <label className="login__label">Email</label>
        <input
          type="text"
          className="login__inpt"
          placeholder="Insira seu email"
        />
        <label className="login__label">Senha</label>
        <input
          type="text"
          className="login__inpt"
          placeholder="Insira sua senha"
        />
        <p className="login__esqueci">Esqueci minha senha</p>
        <Link to="/pets">
          <button className="btn__inicial" type="button">
            Entrar
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
