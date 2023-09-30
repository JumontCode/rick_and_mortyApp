import axios from "axios";
const URL = "http://localhost:3001/rickandmorty/fav/";


//Action types
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


// ACTION | addFav//! ACTION CON PROMESA
// export const addFav = (character) => {
//    return (dispatch) => {
//       axios.post(URL, character).then(({ data }) => {
//          return dispatch({
//             type: 'ADD_FAV',
//             payload: data,
//          });
//       });
//    };
// };

// ACTION | addFav
/*Funcion para añadir a favoritos*/
export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL, character);
      dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      throw new Error("Error al agregar a favoritos:", error);
    }
  };
};

// //! ACTION removeFav CON ASYNC AWAIT
/*Funcion para remover de favoritos*/
export const removeFav = (id) => 
   async (dispatch) => {
    try {
      const { data } = await axios.delete(URL+id);
      dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      alert("Error al remover de favoritos: ");
      console.error(error)
    }
  };

// ACTION | removeFav
// export const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//   return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: 'REMOVE_FAV',
//            payload: data,
//      });
//      });
//   };
// };


export const getCharacterDetail = (id)=> { //Hacemos peticion asíncrona, retornamos una fx
  return function (dispatch) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then(data=>dispatch({type:GET_CHARACTER_DETAIL, payload:data}))
  }
};

export const cleanDetail = () => {
  return {
      type: CLEAN_DETAIL
  }
};

export const filterCards = (gender) => {
  return {
      type: FILTER,
      payload: gender,
  }
};

export const orderCards = (order) => {
  return {
      type: ORDER,
      payload: order,
  }
};