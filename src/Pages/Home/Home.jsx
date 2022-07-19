import logo from "../Imagens/Logo.png";
import ilust from "../Imagens/ilust.png";
import forma2 from "../Imagens/forma2.png";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div class="forma__lateral">
        <img src={forma2} alt="forma" class="form2" />
      </div>
      <Header />
      <div class="main__home">
        <div class="home__content">
          <img src={logo} alt="logo" class="logo" />
          <h3 class="content__title">Boas-Vindas!</h3>
          <p class="content__text">
            Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
            gente!
          </p>
          <button class="btn__inicial" type="button">
            Ja tenho conta
          </button>
          <Link to="/cadastrar">
            <button class="btn__inicial" type="button">
              Quero me cadastrar
            </button>
          </Link>

          <img src={ilust} alt="ilustracao" class="ilust" />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
