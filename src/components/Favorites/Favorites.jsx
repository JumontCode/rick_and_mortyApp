import React from 'react';
import { connect } from "react-redux";
import Card from '../Card/Card';

export const Favorites = ({ myFavorites, onClose }) => {

    return (
        <div>
            {myFavorites?.map((fav) => (
            <Card 
                key={fav.id} 
                name={fav.name} 
                status={fav.status} 
                species={fav.species} 
                gender={fav.gender}
                image={fav.image}
                onClose={onClose}
            />
      ))}
    </div>
  )
};

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
