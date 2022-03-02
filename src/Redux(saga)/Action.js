const addAgeAction = (type,payload) =>{
    return{
        type:type,
        payload: payload
    }
}

function AddAge(){
    return addAgeAction("add_age",1);
}

export default AddAge;