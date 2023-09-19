import axios from "axios";
import { useParams,useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from '../Detail/detail.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Detail(){
    
    // const { id } = useParams();
    // const [character, setCharacter] = useState([]);
    // const navgate = useNavigate;

    // useEffect(() => {
    //     axios(`https://localhost:3001/rickandmorty/character/${id}`)
    //       .then(({ data }) => {
    //         if (data.name) {
    //           setCharacter(data);
    //         } else {
    //           window.alert('No hay personajes con ese ID');
    //         }
    //       })
    //       .catch(error => {
    //         console.error('Error en la solicitud:', error);
    //         // Aquí puedes manejar el error de manera adecuada, por ejemplo, mostrando un mensaje de error al usuario.
    //       });
    //       return setCharacter({});
    //   }, [id]);

    const { id } = useParams();
    const usnav = useNavigate();
    const [character, setCharacter] = useState({});
    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((error) => usnav("/error"));
      return setCharacter({});
    }, [id]);


     return(
         <div className={styles.DetailContainer}>
            {/* {}character &&()   */}
                <> 
                    <h2>SOY EL DETAIL</h2>
                     <NavLink onClick={() => usnav(-1)}>
                    <button>Back</button>
                    </NavLink>
                    <h2>{character.id}</h2> 
                    <h2>{character.name}</h2>
                    <h2>{character.status}</h2>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.origin?.name}</h2>
                    <img src={character.image} alt="imagen" /> 
                </>
        </div>
    )
}

