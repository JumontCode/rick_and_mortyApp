import { useState } from "react";
import styles from "../componentStyles/Form.module.css";

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    // const { name, value } = event.target;
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.FormContainer}>
      <div className={styles.infoLogin}>
        <img src="" alt="" />
        <label className={styles.label}>EMAIL</label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          value={userData.email}
          onChange={(event) => handleChange(event)}
        />

        <label className={styles.label}>PASSWORD</label>
        <input
          type="password"
          name="password"
          placeholder="Your password..."
          value={userData.password}
          onChange={handleChange}
        />

        <input onClick={(event) => handleSubmit(event)} className={styles.btn} type="submit" value="SUBMIT" />
      </div>
    </div>
  );
}
