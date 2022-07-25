import "../Pages/Pets/pets.css";
import mensagem from "../Pages/Imagens/iconemensagem.png"

function Card(props) {
  return (
    <div className="main__card">
      <img src={props.pet} alt="dunga" className="pets__img" />
      <div className="cards__text">
        <h4>{props.name}</h4>
        <p>{props.age}</p>
        <p className="desc">
            {props.Desc}
        </p>
        <p className="local">{props.local}</p>
        <p className="resp">
          <img src={mensagem} alt="mensagem" className="icone__mensagem" />{" "}
          Falar com o responsavel
        </p>
      </div>
    </div>
  );
}

export default Card;
