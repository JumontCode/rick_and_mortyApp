import { REMOVE_FAV, ADD_FAV } from "./actions";

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
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    // REDUCER | REMOVE_FAV
    case 'REMOVE_FAV':
      return { ...state, myFavorites: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
