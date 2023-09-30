import { React, useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import Card from '../Card/Card';
import styles from './Favorites.module.css'
import { filterCards, orderCards, removeFav } from '../../redux/actions';


export const Favorites = ({ myFavorites, onClose }) => {
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false)

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

    return (
      <div>
      <h1 className={styles.title}>My Favorites</h1>
      <div>
      <select onChange={handleOrder} name="order">
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} name="gender">
        <option value="All Favorites">All Favorites</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>

        <div className={styles.favoritesContainer}>
            {myFavorites?.map((fav) => (
            <Card 
                key={fav.id} 
                name={fav.name}
                image={fav.image}
                gender={fav.gender}
                // origin={fav.origin}
                // species={fav.species}
                onClose={() => dispatch(removeFav(fav.id))}
            />))}</div>
            </div>
  )
};

const mapDispatchToProps = (dispatch)=> {
  return {
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
