import React from 'react';
import { connect } from "react-redux";
import Card from "./Card";

export const Favorites = ({ myFavorites }) => {

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

export default connect(mapStateToProps, null)(Favorites);
