import { useState } from "react";
import styles from "../Form/Form.module.css";
import validation from "../Validation/validation";

export default function Form({ login }) {
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
    validation({ ...userData, [property]: value }, setErrors, errors);
  };

  // const errorChange = (event) => {
  //   const property = event.target.name;
  //   const value = event.target.value;

  //   setErrors({...errors, [property]: value})
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.FormContainer}>
       <div className={styles.central}>
                <div className={styles.login}>
                    <div className={styles.titulo}>
                     <span>Rick and Morty</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input type="email"name="email" placeholder="Your Email..." value={userData.email} onChange={handleChange} />

                      <input type="password" name="password" placeholder="Your password..."  value={userData.password} onChange={handleChange}/>
                      
                      <div>
                        <span className={styles.errors}>{errors.password}</span>
                      </div>

                      {/* <input className={styles.button} onClick={handleSubmit} className={styles.btn} type="submit" value="SUBMIT" /> */}
                      <button className={styles.button} onClick={handleSubmit} >LOG IN</button>
                    </form>
                    
                    {/* <div className={styles.pieform}>
                        <a href="#">Registrarse</a>
                    </div> */}
                </div>
            </div>
            </div>
  );
}
