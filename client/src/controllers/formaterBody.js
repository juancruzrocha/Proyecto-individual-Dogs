export const formaterBody = (form) => {
    
    const {name, min_Weight ,max_Weight,min_Height,max_Height,lifeSpan,temperament} = form;
    const weight = `${min_Weight} - ${max_Weight}`;
    const height = `${min_Height} - ${max_Height}`;

   
    const formatedForm = {
        name,
        weight,
        height,
        lifeSpan,
        temperament
    }

    return formatedForm;
}

