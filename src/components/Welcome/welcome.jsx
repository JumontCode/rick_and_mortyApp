import styles from './welcome.module.css'

export default function welcome() {
  return (
    <div className={styles.welcome}>
      <p>Para agregar un personaje añade un id en la barra de búsqueda y haz click en agregar</p>
      <p>También puedes añadir personajes haciendo click en Random</p>
    </div>
    );
}
