import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Welcome, Cards, Nav, About, Detail, Error, Form, Favorites } from "./components/index";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loggedIn, setLoggedIn] = useState([]);
  const location = useLocation();

  const [access, setAccess] = useState(false);
  const EMAIL = 'u@m.com';
  const PASSWORD = 'm123456';

  const { pathname } = useLocation();
  const navigate = useNavigate();

    //! LOGIN CON PROMESA
  // function login(userData) {
  //  const { email, password } = userData;
  //  const URL = 'http://localhost:3001/rickandmorty/login/';
  //  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //    const { access } = data;
  //    setAccess(data);
  //    access && navigate('/home');
  //   });
  // }

  //! LOGIN CON ASYNC AWAIT
  const login = async (userData) =>{
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
        const { data } = await axios(`${URL}?email=${email}&password=${password}`)
        const { access } = data;
        if(access){
          setAccess(data);
          navigate('/home');
        }else {
          alert("Los datos ingresados son inválidos");
        } 
      } catch (error) {
        console.error('Error al iniciar sesión:', error); 
      }      
   }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  // useEffect(()=>{}, location)

  //! FUNCION ONSEARCH CON PROMESA
  // function onSearch(id) {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`)
  //   .then(
  //     ({ data }) => {
  //       if (!characters.find((char) => char.id === data.id)) {
  //         if (data.name) {
  //           setCharacters((oldChars) => [...oldChars, data]);
  //         } else {
  //           window.alert(`Ya existe un personaje con el id ${id}`);
  //         }}
  //     }
  //   )
  // };

  //!FUNCION ONSEARCH CON ASYNC AWAIT
  const onSearch = async (id) =>{
    const URL = `http://localhost:3001/rickandmorty/character/`;

    if (isNaN(id)) {
      alert("Por favor ingrese un numero correcto ID.");
    }

    try {
      const { data } = await axios(`${URL}${id}`);
      // if (!characters.find((char) => char.id === data.id)) {}
      //   if (data.name) {
      //     setCharacters((characters) => [...characters, data]);
      //   } else {
      //     alert(`Ya existe un personaje con el id ${id}`);
      //   }}

      
      // if (data.name) {
      //   const characterExists = characters.find((char) => char.id === data.id);

      //   if (characterExists) {
      //     alert(`¡YA EXISTE UN PERSONAJE CON EL ID: ${id}!`);
      //   } else {
      //     setCharacters((characters) => [...characters, data]);
      //   }
      // } 

      if (data.name) {
        const characterExists = characters.find((char) => char.id === data.id)
        if (!characterExists) {
          setCharacters((characters) => [...characters, data]);
        } else if(characterExists){
          alert(`¡YA EXISTE UN PERSONAJE CON EL ID: ${id}!`);
        }else if(data.id > 826){
          alert(`No EXISTEN PERSONAJES CON ${id}`);
        }
    }
      // }    
    } catch (error) {
      console.error(error)
    }
  }

//onClose para eliminar la card
  function onClose(id) {
    const newCharacters = characters.filter(
      (characters) => characters.id !== parseInt(id));
    setCharacters(newCharacters);
  }

  //funcion para cambiar el fondo dependiendo la ruta
  const bgImage = () =>{
    if (location.pathname === "/") {
      return "login"
    }
    else if (location.pathname === "/home") {
      return "App";
    }else if (location.pathname.startsWith("/detail")) {
      return "detail";
    } else if (location.pathname === "/favorites") {
      return "favorites";
    } else if (location.pathname === "/about") {
      return "about";
    } 
  }

  return (
    <div className={bgImage()}>
      {location.pathname !== '/' &&    <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={< Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
