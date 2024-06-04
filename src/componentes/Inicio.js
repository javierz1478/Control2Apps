import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Inicio() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get('https://api.chucknorris.io/jokes/search', {
        params: { query: inputText }
      });
      navigate('/app', { state: { jokes: result.data.result } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Factos de Chuck Norris</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Ingrese un texto"
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
    </div>
  );
}

export default Inicio;
