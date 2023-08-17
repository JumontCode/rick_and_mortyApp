import styles from "../componentStyles/Error.module.css";
import errorImg from '../resources/errorimg.jpg'

export default function Error(){

    return(
        <div>
            <h1>ERROR 404 NOT FOUND</h1>
            <img className={styles.errorImg} src={errorImg} alt=""/>
            
        </div>
    )
}