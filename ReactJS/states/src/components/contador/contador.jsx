import { useState } from "react"

function Contador() {

    //States e Variáveis
    // Funções

    const [contador, setContador] = useState(0)

    function Incrementar() {
           if (contador < 10) {
            setContador(contador + 1)
        } else{
            setContador(0)
        }
       
    }

    function descrementar() {
        if (contador > 0) {
             setContador(contador - 1)
        } else{
            setContador(0)
        }
       
    }

    return (
        <div className="contador">
            <h1 className="contador__title">Contador {contador}</h1>

            <button onClick={Incrementar}>Contar (++)</button>
            <button onClick={descrementar}>Contar (--)</button>
        </div>
    )
}

//elaborar a funcionalidade de descrementar X
//nao pode numeros negativos
//se chegar em 10 o contador tem q zerar

export default Contador