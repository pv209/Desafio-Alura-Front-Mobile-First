import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./mensagem.css";

function Mensagem() {
  return (
    <div className="main__mensagem">
      <Header />
      <div className="mensagem__text">
        <h4>
          Envie uma mensagem para a pessoa ou instituição que está cuidando do
          animal:
        </h4>
      </div>
      <div className="mensagem__form">
        <label className="mensagem__label">Nome</label>
        <input
          type="text"
          className="mensagem__inpt"
          placeholder="Insira seu nome completo"
        />
        <label className="mensagem__label">Telefone</label>
        <input
          type="text"
          className="mensagem__inpt"
          placeholder="Insira seu telefone e/ou whatsapp"
        />
        <label className="mensagem__label">Nome do animal</label>
        <input
          type="text"
          className="mensagem__inpt"
          placeholder="Por qual animal voce se interessou"
        />
        <label className="mensagem__label">Mensagem</label>
        <input
          type="text"
          className="mensagem__mensagem"
          placeholder="escreva sua mensagem"
        />
      </div>
      <button className="btn__inicial" type="button">
        Enviar
      </button>
      <Footer />
    </div>
  );
}

export default Mensagem;
