import { React, useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import Card from '../Card/Card';
import { NavLink } from "react-router-dom";
import styles from './Favorites.module.css'
import { removeFav } from '../../redux/actions';


export const Favorites = ({ myFavorites, onClose }) => {
  const dispatch = useDispatch();
    return (
        <div className={styles.favoritesContainer}>
            {myFavorites?.map((fav) => (
            <Card 
                key={fav.id} 
                name={fav.name}
                image={fav.image}
                onClose={() => dispatch(removeFav(fav.id))}
            />
      ))}
    </div>
  )
};

function mapDispatchToProps(dispatch) {
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
