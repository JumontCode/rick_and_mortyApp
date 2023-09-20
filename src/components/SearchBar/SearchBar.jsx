import { useState } from "react";
import styles from './searchBar.module.css'


export default function SearchBar({ onSearch }) {
   
   const [id, setID] = useState('')

   function handleChange(event){
      setID(event.target.value);
   }

   return (
      <div className={styles.containerSearch}>
         <input size='20' type='search' onChange={handleChange} value={id} />
         <button className={styles.containerSearch} onClick={() => onSearch(id)}>Agregar</button>
         {/* <div className={styles.searchBar}></div> */}
      </div>
   );
}
