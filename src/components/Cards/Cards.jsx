import Card from "../Card/Card";
import styles from "./cards.module.css"

export default function Cards({ characters, onClose}) {
  return (
    <div className={styles.containerCards}>
      {characters.map(character => (
        <Card 
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          gender={character.gender}
          // species={character.species}
          // origin={character.origin}
          onClose={(onClose) /* => window.alert("Cerrar card") */}
        />
      ))}
    </div>
  );
}
