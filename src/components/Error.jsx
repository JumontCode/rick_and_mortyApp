import styles from "../componentStyles/Error.module.css";

export default function Error(){

    return(
        <div>
            <h1>ERROR 404 NOT FOUND</h1>
            <img src='' className={styles.errorImg} alt=""/>
        </div>
    )
}