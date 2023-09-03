import Card from "../Card/Card";
import styles from "./cards.module.css"

export default function Cards({ characters, onClose, removeOnClick}) {
  return (
    <div className={styles.containerCards}>
      {characters.map(character => (
        <Card 
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={(onClose) /* => window.alert("Cerrar card") */}
          removeOnClick={(removeOnClick)}
        />
      ))}
    </div>
  );
}
