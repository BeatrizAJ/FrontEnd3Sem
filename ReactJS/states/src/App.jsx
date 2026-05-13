import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Contador from './components/contador/contador'
import Formulariostate from './components/formulariostate/formulariostate'
import CadFruta from './components/cadfruta/cadfruta'

function App() { 
  //variavel privada (obj) so pode ser mudada pela funcao setTitulo
  const [titulo, setTitulo] = useState("Google");

function mudarTexto() {
  titulo = "Microsoft"
}
  function mudarTexto2() {
  titulo = "Adenicon"
}

  return (
    <>
      {/* <h1>Minha Pag de {titulo}</h1>
      <button onClick={mudarTexto}>Mudar Texto</button>
      <br />
      <button onClick={mudarTexto2}>Adenicon</button>

      <Contador />
      <br />
      <Formulariostate /> */}

      <CadFruta/>
    </>
  );
}

export default App
