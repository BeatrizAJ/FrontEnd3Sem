import "./produto.css"

function Produto({NomeDoProduto ,preco ,descricao}) {
    return (
        <p>
        nome do produto: {NomeDoProduto} 
        preço: {preco}
        Descrição: {descricao} </p>
    )
}

export default Produto