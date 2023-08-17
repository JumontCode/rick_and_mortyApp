import {REMOVE_FAV, ADD_FAV} from './actions'

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:

      const characterNotRepeat = state.myFavorites.some((fav)=>fav.id === action.payload.id);
      if(characterNotRepeat){
        return state
      }
      else{
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
    }
    }

    case REMOVE_FAV: 
    return {...state, myFavorites: state.myFavorites.filter(char => char.id !==  parseInt(action.payload))}

    default:
      return { ...state }
  }
};

export default rootReducer;
