import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Error from "./components/Error";
import Form from "./components/Form";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loggedIn, setLoggedIn] = useState([]);

  const [access, setAccess] = useState(false);
  const EMAIL = 'user@email.com';
  const PASSWORD = '123';

  const navigate = useNavigate();

  const login = (userData) => {
    if(userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
  }



  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  let location = useLocation();
  // useEffect(()=>{}, location)

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    const newCharacters = characters.filter(
      (characters) => characters.id !== parseInt(id)
    );
    setCharacters(newCharacters);
  }

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={< Form login={login} />} />
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
