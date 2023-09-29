// export default function validation(userData, setErrors, errors) {
//   const errors = {};

//   /* VALIDATION INPUT EMAIL */
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Validation(userData, setErrors, errors){
  if (!userData.email) {
    setErrors({ ...errors, email: "Email no puede estar vacío" });
  } else if (userData.email.length > 35) {
    setErrors({ ...errors, email: "Email no puede exceder los 35 caracteres" });
  } else if (!regexEmail.test(userData.email)) {
    setErrors({ ...errors, email: "Email inválido" });
  } else if (userData.password.length < 6 || userData.password.length > 10 || (!/\d/.test(userData.password))) {
    setErrors({ ...errors, password: "La contraseña debe contener de 6 a 10 caracteres, y al menos un número" });
  } else {
    setErrors({ ...errors, email: "", password: "" });
  }
};