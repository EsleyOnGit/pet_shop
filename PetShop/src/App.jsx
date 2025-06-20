import { Route, BrowserRouter, Routes } from "react-router-dom";

import './App.css'
import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
import Usuarios from "./Pages/Usuarios";
import EditarCliente from "./Pages/editarCliente";
import CadastroCliente from "./Pages/cadastroCliente"
import AtualizarPet from "./Pages/atualizarPet";
import CadastroPet from "./Pages/cadastroPet";

function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route component = { Home } element={<Home />}  path="/" exact />
              <Route component = { Pets } element={<Pets />} path="/pets" />
              <Route component = { Usuarios } element={<Usuarios />} path="/usuarios" />
              <Route component = { EditarCliente } element={<EditarCliente />} path="/atualizar/usuario/:id" />
              <Route component = { CadastroCliente } element={<CadastroCliente />} path="/cadastro/usuario" />
              <Route component = { CadastroPet } element={<CadastroPet />} path="/cadastro/pet" />
              <Route component = { AtualizarPet } element={<AtualizarPet />} path="/atualizar/pet/:id" />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
