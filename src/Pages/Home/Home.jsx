import casa from "../Imagens/Casa.png";
import forma1 from "../Imagens/Forma 1.png";
import mensagem from "../Imagens/Mensagens.png";
import logo from "../Imagens/Logo.png";
import ilust from "../Imagens/ilust.png";
import forma2 from "../Imagens/forma2.png"
import "./home.css";

function Home() {
  return (
    <div class="main__home">
      <div class="header">
        <img src={casa} alt="casa" class="casa" />
        <img src={forma1} alt="forma" class="forma" />
        <img src={mensagem} alt="mensagem" class="mensagem" />
      </div>
      <div class="home__content">
        <img src={logo} alt="logo" class="logo" />
        <h3 class="content__title">Boas-Vindas!</h3>
        <p class="content__text">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </p>
        <button class="btn__login" type="button">
          Ja tenho conta
        </button>
        <button class="btn__cadastro" type="button">
          Quero me cadastrar
        </button>
      </div>
      <img src={ilust} alt="ilustracao" class="ilust" />
      <div class="home__footer">
        <p>2022 - Desenvolvido por Alura.</p>
      </div>
    <img src={forma2} alt="forma" class="form2"/>
    </div>
  );
}

export default Home;
