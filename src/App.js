import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav.jsx";
import axios from "axios";


function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }

    function onClose(id){
      const newCharacters = characters.filter(characters => characters.id !== parseInt(id))
      setCharacters(newCharacters)
   }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
