import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from '../componentStyles/detail.module.css';

export default function Detail(){
    
    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
     return(
         <div className={styles.DetailContainer}>
            {character &&(
                <> 
                    {/* <h2>SOY EL DETAIL</h2> */}
                    <h2>{character.name}</h2>
                    <h2>{character.status}</h2>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.origin?.name}</h2>
                    <img src={character.image} alt="imagen" />
                </>
            )}          
        </div>
    )
}