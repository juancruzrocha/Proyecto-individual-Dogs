export const orderDogsByWeight = (state, action) => {
   
    return action.payload === "asc"
    ? state.dogs.sort((a, b) => {
          if (Number(a.weight.slice(0,2)) < Number(b.weight.slice(0,2))) {
            return -1;
          }
          if (Number(a.weight.slice(0,2)) > Number(b.weight.slice(0,2))) {
            return 1;
          }
          return 0;
        })
      : state.dogs.sort((a, b) => {
          if (Number(a.weight.slice(0,2)) < Number(b.weight.slice(0,2))) {
            return 1;
          }
          if (Number(a.weight.slice(0,2)) > Number(b.weight.slice(0,2))) {
            return -1;
          }
          return 0;
        });
  }