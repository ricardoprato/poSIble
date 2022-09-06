export const validator = (form) => {
  console.log(form);
  const errors = {};
  if (form.name) {
    if (form.name.trim() === "" || form.name.length < 1 || form.name === "") {
      errors.name = "Nombre no puede estar vacío";
    } else if (form.name.match(/[^a-zA-Z]/)) {
      errors.name = "Solo se permiten caracteres alfabeticos";
    }
  }
  if (form.description) {
    if (
      form.description.trim() === "" ||
      form.description.length < 1 ||
      form.description === ""
    ) {
      errors.description = "Descripción no puede estar vacio";
    } else if (form.description.length < 8) {
      errors.description = "Descripción debe tener al menos 10 caracteres";
    }
  }
  return errors;
};
