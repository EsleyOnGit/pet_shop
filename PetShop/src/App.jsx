import { Route, BrowserRouter, Routes } from "react-router-dom";

import './App.css'
import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
import Usuarios from "./Pages/Usuarios";
import Cadastro from "./components/cadastro";

function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route component = { Home } element={<Cadastro />}  path="/" exact />
              <Route component = { Pets } element={<Pets />} path="/pets" />
              <Route component = { Usuarios } element={<Usuarios />} path="/usuarios" />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
