import axios from "axios";
const URL = "http://localhost:3001/rickandmorty/fav/";

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
export const removeFav = async (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(URL, id);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.error("Error al remover de favoritos: ", error);
    }
  };
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
