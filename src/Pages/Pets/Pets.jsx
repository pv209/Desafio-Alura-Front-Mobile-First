import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./pets.css";
import dunga from "../Imagens/Imagem Dunga.png";
import mensagem from "../Imagens/iconemensagem.png"

function Pets() {
  return (
    <>
      <Header />
      <div className="main__pets">
        <h5>
          Olá! Veja os amigos
          <br /> disponíveis para adoção!
        </h5>
        <div className="main__cards">
          <div className="main__card">
            <img src={dunga} alt="dunga" className="pets__img" />
            <div className="cards__text">
              <h4>Dunga</h4>
              <p>2anos</p>
              <p className="desc">Parte pequeno<br/>Calmo e educado</p>
              <p className="local">Rio de Janeiro (RJ)</p>
              <p className="resp"> <img src={mensagem} alt="mensagem" className="icone__mensagem" />  Falar com o responsavel</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Pets;
