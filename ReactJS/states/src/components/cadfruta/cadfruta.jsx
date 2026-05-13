import { useState } from "react"

export default function CadFruta() {
    const [fruta, setFruta] = useState("")

    //arrau para o cadastro de frutas
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi" },
        { id: 2, nome: "Melão" }
    ])

    function cadastrar(e) {
        e.preventDefault()
            setArrFrutas([
                ...arrFrutas,
                {
                    id: Date.now(),
                    nome: fruta,
                    quantidade: quantidade
                }
            ])
        }
        setFruta("")
        setQuantidade(0)
    }

    return (
        <section className="sessao-cadastro">
            <h2>Cadastro</h2>

            <form action="" onSubmit={cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">
                        Digite o nome da fruta
                    </label>
                </fieldset>
                <input
                    type="text"
                    id="fruta"
                    value={fruta}
                    placeholder="ex: limão"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />
                    <input
                    type="text"
                    id="quantidade"
                    value={quantidade}
                    placeholder="ex: 1"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setQuantidade(e.target.value)
                    }}
                />

                <button className="cadastro__btncadastrar"
                    type="text"
                    onClick={cadastrar}
                >Cadastrar</button>
            </form>


            <div className="resultados">
                <ul>
                    {arrFrutas.map((f) => {
                        <li key={f.id}>
                            Fruta: <strong>{f.nome}</strong>
                            Quantidade: <strong>{f.quantidade}</strong>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )

}