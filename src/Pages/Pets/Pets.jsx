import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./pets.css";
import dunga from "../Imagens/Imagem Dunga.png";
import felicia from "../Imagens/felicia.png"
import sirius from "../Imagens/sirius.png"
import Card from "../../Components/Card";
import fiona from "../Imagens/fiona.png"
import sid from "../Imagens/sid.png"
import yoda from "../Imagens/yoda.png"
import lua from "../Imagens/lua.png"
import amora from "../Imagens/amora.png"
import zelda from "../Imagens/zelda.png"


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
          <Card pet={dunga} name="Dunga" age="2 anos" Desc="Porte pequeno  Calmo e educado" local="Rio de Janeiro (RJ)" />
          <Card pet={felicia} name="Felícia" age="3 meses" Desc="Porte pequeno  Ativa e carinhosa" local="Nova Iguaçu (RJ)" />
          <Card pet={sirius} name="Sirius" age="6 meses" Desc="Porte grande  Ativo e educado" local="Duque de Caxias (RJ)" />
          <Card pet={fiona} name="Fiona" age="3 anos" Desc="Porte pequeno  Calma e carinhosa" local="São Gonçalo (RJ)" />
          <Card pet={sid} name="Sid" age="8 meses" Desc="Porte médio/grande Brincalhão e amável" local="Rio de Janeiro (RJ)" />
          <Card pet={yoda} name="Yoda" age="1 ano" Desc="Porte médio Ativo e carinhoso"  local="Nova Iguaçu (RJ)"/>
          <Card pet={lua} name="Lua" age="6 meses" Desc="Porte médio Ativa e carinhosa" local="Duque de Caxias (RJ)" /> 
          <Card pet={amora} name="Amora" age="45 dias" Desc=" Porte grande Calma e carinhosa" local="São Gonçalo (RJ)" />
          <Card pet={zelda} name="Zelda" age="5 meses" Desc="Porte médio Ativa e amável" local="Rio de Janeiro (RJ)" />

        </div>

        <Footer />
      </div>
    </>
  );
}

export default Pets;
