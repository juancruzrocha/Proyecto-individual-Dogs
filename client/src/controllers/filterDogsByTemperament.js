export const filterDogsByTemperament = (state, action) => {
  const allTemperaments = state.dogs; //[ {…}, {temperament:	"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"}, {…}, … ]
  const selectedTemperament = action.payload; //playful
  var filtered = [];

  allTemperaments.forEach((element) => {
    let temps = element.temperament && element.temperament.split(", "); // [ "Extroverted", "Friendly", "Sociable", "Playful", "Intelligent", "Active" ]

    if (temps?.includes(selectedTemperament)) filtered.push(element);
  });
  return filtered;
};
