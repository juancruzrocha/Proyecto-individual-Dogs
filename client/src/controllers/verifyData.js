export const verifyData = (dog) => {
  
  if (dog.temperament) return dog.temperament;

  const formatedTemperaments = dog.temperaments?.map((temp) => temp.name);

  return String(formatedTemperaments);
};
