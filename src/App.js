import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"

import { Routes, Route } from "react-router-dom";



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
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
