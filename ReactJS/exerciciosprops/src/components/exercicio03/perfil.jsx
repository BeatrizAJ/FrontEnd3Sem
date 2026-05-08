
import './Perfil.css'

function Perfil({ nome, idade, profissao }) {
    return (
        <div className="cartao-perfil">
            
            <p className="perfil-nome">{nome}</p>
            
            <div className="perfil-detalhes">
                <p><strong>Nome:</strong> {nome}</p>
                <p><strong>Idade:</strong> {idade} anos</p>
                <p><strong>Profissão:</strong> {profissao}</p>
            </div>
        </div>
    )
}

export default Perfil
