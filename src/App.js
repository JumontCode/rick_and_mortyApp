import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Cards, Nav, About, Detail, Error, Form, Favorites } from "./components/index";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { removeFav } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loggedIn, setLoggedIn] = useState([]);

  const [access, setAccess] = useState(false);
  const EMAIL = 'u@m.com';
  const PASSWORD = '123';

  const {pathname} = useLocation();
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
    try {
      const { data } = await axios(`${URL}${id}`);
      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(`Ya existe un personaje con el id ${id}`);
        }}
    } catch (error) {
      
    }
  }

  function onClose(id) {
    const newCharacters = characters.filter(
      (characters) => characters.id !== parseInt(id)
    );
    setCharacters(newCharacters);
  }

  function removeOnClick(id){
    return {type: removeFav, payload: id}
  }

  return (
    <div className="App">
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={< Form login={login} />} />
        <Route path="/home" element={<Cards onClose={onClose} removeOnClick={removeOnClick} characters={characters} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
