
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Cliente from './pages/Cliente/Cliente';
import NovoCliente from './pages/Cliente/NovoCliente';
import Conteiner from './pages/Conteiner/Conteiner';
import NovoConteiner from './pages/Conteiner/NovoConteiner';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} >
        
        <Route path='cliente' element={<Cliente />} />
        <Route path='cliente/novo' element={<NovoCliente />} />

        <Route path='conteiner' element={<Conteiner />} />
        <Route path='conteiner/novo' element={<NovoConteiner />} />

      </Route>
    </Routes>
  );
}

export default App;
