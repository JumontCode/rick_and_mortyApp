import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState("");

  function handleChange(event) {
    setID(event.target.value);
  }

  return (
    <div className={styles.containerSearch}>
      <div>
        <input
          size="10"
          type="search"
          placeholder="Agregar ID"
          onChange={handleChange}
          value={id}
        />
      </div>
      <div>
        <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
    </div>
  );
}
