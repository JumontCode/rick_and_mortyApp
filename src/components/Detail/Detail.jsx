import axios from "axios";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../Detail/detail.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Detail() {
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

  return (
    <div className={styles.DetailContainer}>
      <>
        {/* <h2>SOY EL DETAIL</h2> */}
        <div className={styles.card_left}>
          <img src={character.image} alt="imagen" />
        </div>
        <div className={styles.card_right}>
          <NavLink onClick={() => usnav(-1)}>
            <button className={styles.buttonReturn}>Regresar</button>
          </NavLink>

          <div className={styles.containerInfo}>
            <div className={styles.info}></div>
            <h2>Numero de identificacion: {character.id}</h2>
            <h2>name: {character.name}</h2>

            <br />
            <p className={styles.description}>
              Description: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Veniam voluptatum quo, expedita accusamus ullam modi,
              asperiores minima eius iusto fugit, obcaecati ipsum explicabo? Ea
              illo necessitatibus suscipit harum mollitia ad. 
              
              <br /> <br /> <br /> 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequatur voluptates
              numquam.
            </p>
          </div>
        </div>
      </>
    </div>
  );
}
