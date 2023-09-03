export default function validation(input) {
  const errors = {};

  /* VALIDATION INPUT EMAIL */
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!regexEmail.test(input.email)) {
    errors.email("El nombre de usuario debe ser un email...");
  }
  if (!input.email) {
    errors.email("El nombre no puede estar vacio");
  }
  if (input.email.length > 35) {
    errors.email("El nombre de usuario no puede tener más de 35 caracteres.");
  }

  /* VALIDATION INPUT PASSWORD */

  if (!/\d/.test(input.password)) {
    errors.password("Debe tener almenos un numero");
  }
  if (input.password.value.length < 6) {
    errors.password("Debe tener una longitud mayor de 6");
  }
}
