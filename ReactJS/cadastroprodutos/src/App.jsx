import HomePage from './pages/home/homepage'
import './App.css'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import CadastroFruta from './pages/cadastrofruta/cadastrofrutapage'
import CadastroProduto from './pages/cadastroproduto/cadastroprodutopage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<QuemSomosPage/>} path='/quemsomos'/>
        <Route element={<CadastroFruta/>} path='/frutas'/>
        <Route element={<CadastroProduto/>} path='/produtos'/>
      </Routes>
    </BrowserRouter>
  )
}
