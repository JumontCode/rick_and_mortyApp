import styles from "./about.module.css";
import imag from "../../resources/IMG_20230114_111717.jpg"

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <h1 className={styles.titleAbout}>
        EN ESPERA DE MI INFORMACION PERSONAL
      </h1>

      <div className={styles.containerInfo}>
        <div className={styles.image}>
            <img src={imag} alt="Not Found" />
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            possimus cupiditate consequuntur atque at sapiente quaerat sunt
            pariatur tenetur vero nihil beatae molestias saepe quam ipsum,
            doloribus maxime impedit id.
            
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            possimus cupiditate consequuntur atque at sapiente quaerat sunt
            pariatur tenetur vero nihil beatae molestias saepe quam ipsum,
            doloribus maxime impedit id.

            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            possimus cupiditate consequuntur atque at sapiente quaerat sunt
            pariatur tenetur vero nihil beatae molestias saepe quam ipsum,
            doloribus maxime impedit id.

            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            possimus cupiditate consequuntur atque at sapiente quaerat sunt
            pariatur tenetur vero nihil beatae molestias saepe quam ipsum,
            doloribus maxime impedit id.
          </p>
        </div>
      </div>
    </div>
  );
}
