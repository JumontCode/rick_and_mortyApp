import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({removeOnClick, id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  
  const [isFav, setIsFav] = useState(false);

     useEffect(() => {
   myFavorites?.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   }   );}, [myFavorites]);

  // useEffect(() => {
  //   for(let i = 0; i<myFavorites.length; i++){
  //      if (myFavorites[i].id === id) {
  //         setIsFav(true)
  //      }
  //   }
  // });

  const handleFavorite = () => {
    let character = {id, name, status, species, gender, origin, image};

    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };

  const handleClose = (id) =>{
    onClose(id)
    removeFav(id)
  }

  return (
    <div>
      {
        isFav ? ( <button onClick={handleFavorite}>❤️</button>) 
        : ( <button onClick={handleFavorite}>🤍</button>)
      }

      <button onClick={() => handleClose(id)}>X</button>
      <Link to={`/detail/${id}`}></Link>
        <h2>{name}</h2>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
        <img src={image} alt="" />
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites,
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);