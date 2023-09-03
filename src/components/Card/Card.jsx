import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import styles from './card.module.css';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  
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
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.buttonContainer}>
          <img src={image} alt="" />
          {
            isFav ? ( <button className={styles.btnFav} onClick={handleFavorite}>❤️</button>) 
            : ( <button className={styles.btnFav} onClick={handleFavorite}>🤍</button>)
          }
          
          <button className={styles.btnClose} onClick={() => handleClose(id)}>X</button>
        </div>

      
        <div className={styles.info}>
      <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
          {/* <h2>{status}</h2> */}
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
        <div className={styles.image}>
        </div>
      </div>
    </div>
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