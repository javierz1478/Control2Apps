import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; 
function Factos() {
  const location = useLocation();
  const jokes = location.state.jokes;
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarFavoritos, setmostrarFavoritos] = useState(false); 

  // Deja la fecha de creación en un formato legible
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const toggleFavorite = (joke) => {
    if (favoritos.some(fav => fav.id === joke.id)) {
      setFavoritos(favoritos.filter(fav => fav.id !== joke.id));
    } else {
      setFavoritos([...favoritos, joke]);
    }
  };

  const togglemostrarFavoritos = () => {
    setmostrarFavoritos(!mostrarFavoritos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Factos</h1>
        <Link to="/">Volver</Link>
        <table>
          <thead>
            <tr>
              <th>Facto</th>
              <th>Fecha Creación</th>
              <th>Categorias</th>
              <th>Like</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <td>{joke.value}</td>
                <td>{formatDate(joke.created_at)}</td>
                <td>{joke.categories.join(', ') || 'N/A'}</td>
                <td>
                  <button onClick={() => toggleFavorite(joke)} className="like-button">
                    <FaHeart color={favoritos.some(fav => fav.id === joke.id) ? 'red' : 'white'} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={togglemostrarFavoritos} className="favoritos-button">
          {mostrarFavoritos ? 'Ocultar favoritos' : 'Ver mis favoritos'}
        </button>
        {mostrarFavoritos && favoritos.length > 0 && (
          <div>
            <h2>Favoritos</h2>
            <table>
              <thead>
                <tr>
                  <th>Facto</th>
                  <th>Fecha Creación</th>
                  <th>Categorias</th>
                </tr>
              </thead>
              <tbody>
                {favoritos.map((joke, index) => (
                  <tr key={index}>
                    <td>{joke.value}</td>
                    <td>{formatDate(joke.created_at)}</td>
                    <td>{joke.categories.join(', ') || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </header>
    </div>
  );
}

export default Factos;
