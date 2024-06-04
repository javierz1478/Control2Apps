import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './componentes/Inicio';
import Factos from './componentes/Factos';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/app" element={<Factos />} />
      </Routes>
    </Router>
  );
}

export default App;