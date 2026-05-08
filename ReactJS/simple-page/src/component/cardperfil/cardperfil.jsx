import MyPeople from "../../assets/avatar.jpg";
import "./cardperfil.css"
function CardPerfil() {
    return (
         <div class="card-perfil">
            <img  class="card-perfil__image" 
            src={MyPeople} 
            alt="imagem do usuario" 
            />
         </div>
    )
}

export default CardPerfil