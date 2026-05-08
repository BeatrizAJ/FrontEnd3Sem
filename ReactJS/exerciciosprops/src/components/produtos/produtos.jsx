import Produto from "../exercicio02/produto"
import "./produtos.css"

    export default function Produtos() {
        const produtos = [
            {
                nome: "tenis de marca",
                preco: 550,
                descricao: "tenis chique"
            },
            {
                nome: "camiseta de marca",
                preco: 450,
                descricao: "camiseta chique"
            },
        ]
    }
    return (
        produtos.map((produtinho) => {
            return(
                <Produto
                nome={produtinho.nome}
                preco={produtinho.preco}
                descricao={produtinho.descricao}
                />
            )
        })
    )


