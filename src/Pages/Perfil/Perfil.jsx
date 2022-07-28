import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./perfil.css";
import elipse from "../Imagens/Ellipse 2.png";
import { Link } from "react-router-dom";

function Perfil() {
  return (
    <div className="perfil__container">
      <div className="main__perfil">
        <Header />
        <div className="perfil__text">
          <h4 className="text">
            Esse é o perfil que aparece para responsáveis ou ONGs que recebem
            sua mensagem.
          </h4>
        </div>
        <div className="perfil__form">
          <h7 className="perfil__title">Perfil</h7>
          <div className="perfil__label">
            <label className="label">Foto</label>
          </div>
          <img src={elipse} alt="perfil__foto" className="perfil__foto" />
          <p className="add__foto">Clique na foto para editar</p>
          <div className="perfil__label">
            <label className="label">Nome</label>
            <input
              type="text"
              className="perfil__inpt"
              placeholder="Joana Magalhaes"
            />
          </div>
          <div className="perfil__label">
            <label className="label">Telefone</label>
            <input
              type="text"
              className="perfil__inpt"
              placeholder="55 11 XXXXXXXXX"
            />
          </div>
          <div className="perfil__label">
            <label className="label">Cidade</label>
            <input
              type="text"
              className="perfil__inpt"
              placeholder="Sao Paulo"
            />
          </div>
          <div className="perfil__label">
            <label className="label">Sobre</label>
            <input
              type="text"
              className="perfil__sobre"
              placeholder="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
            />
          </div>
          <Link to="/pets">
            <button className="btn__inicial" type="button">
              Salvar
            </button>
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Perfil;
