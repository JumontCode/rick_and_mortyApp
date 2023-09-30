import {
  REMOVE_FAV,
  ADD_FAV,
  GET_CHARACTER_DETAIL,
  ORDER,
  FILTER,
} from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV:

    //   const characterNotRepeat = state.myFavorites.some((fav)=>fav.id === action.payload.id);
    //   if(characterNotRepeat){
    //     return state
    //   }
    //   else{
    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, action.payload]
    // }
    // }

    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (char) => char.id !== parseInt(action.payload)
    //     ),
    //   };

    // REDUCER | ADD_FAV
    case "ADD_FAV":
      return {
        ...state, myFavorites: action.payload, allCharacters: action.payload,
      };

    // REDUCER | REMOVE_FAV
    case "REMOVE_FAV":
      return { ...state, myFavorites: action.payload };

    case GET_CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload };

    case FILTER:
      let { allCharacters } = state;
      const filterValue = action.payload;

      if (filterValue === "All Favorites") {
        return { ...state, myFavorites: allCharacters };
      } else {
        const filteredCharacters = state.allCharacters.filter(
          (character) => character.gender === filterValue
        );
        return { ...state, myFavorites: filteredCharacters };
      }
    case ORDER:
      const sortedCharacters = state.myFavorites.slice().sort((a, b) => {
        //slice guarda los cambios del sort en un arreglo, sino solamente se cambiar y organizan pero no se deuelven los cambios
        if (action.payload === "A") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    default:
      return state;
  }
};

export default rootReducer;
