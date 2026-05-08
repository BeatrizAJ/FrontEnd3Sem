import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/title/Title'

function App() {
  
  return (
    //// container imaginario
    <>    
      <Title    texto="O rato roeu o titulo da pag"/>
      <Subtitle texto="Minha pag" />
      <Subtitle  bia="01" texto="Minha pag 2"/>
    </>
    //////elemetos irmãos tem que estar dentro de um container
  );
}

export default App


