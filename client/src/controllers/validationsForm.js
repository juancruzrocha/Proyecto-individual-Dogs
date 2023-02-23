export const validationsForm = (form) => {
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexWeight = /^([1-9][0-9]{0,1}|0)$/;
  const regexHeight = /^(0?[0-9]|[1-9][0-9]|1[0-1][0-9]|120)$/;
  const regexLifeSpan = /^(0[0-9]|1[0-9]|2[0-8])-([1-9]|[12][0-9]|3[0-1])$/;

  let errors = {}; // cada error que tengamos lo guardamos aca

  if (!form.name.trim()) {
    errors.name = "*Name is required.";
  } else if (!regexName.test(form.name)) {
    errors.name = "*Invalid name";
  }

  if (!regexWeight.test(form.min_Weight)) {
    errors.min_Weight = "*Weight must be a number between 0 and 159kg.";
  }
  if (!regexWeight.test(form.max_Weight)) {
    errors.max_Weight =
      "*Weight must be a number between 0 and 159kg.  If your dog weights more than 159kg... CONGRATULATIONS ! it's a world record.";
  }
  if (form.max_Weight <= form.min_Weight) {
    errors.max_Weight = "Max weight must be greater than min weight.";
  }
  if (!regexHeight.test(form.min_Height)) {
    errors.min_Height = "*Height must be a number between 0 and 120cm.";
  }
  if (!regexHeight.test(form.max_Height)) {
    errors.max_Height =
      "*Height must be a number between 0 and 120cm. If your dog is taller than 120cm... CONGRATULATIONS ! it's a world record.";
  }
  if (form.max_Height <= form.min_Height) {
    errors.max_Height = "Max height must be greater than min height.";
  }
  if (!regexLifeSpan.test(form.lifeSpan)) {
    errors.lifeSpan = '*respect format: "22-29" "08-15" "12-24".';
  }

  if (!form.temperament.length) {
    errors.temperament = "*Choose at least one temperament.";
  } 

  //el resto de las validaciones van aqui debajo

  return errors;
};
