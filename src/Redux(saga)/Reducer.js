const initialState = {
    age:0
}

const Reducer = (state=initialState, action) =>{
    const {type,payload} = action;
    const newState = {...state}
    switch(type){
        case 'add_age_sage':
            newState.age += payload
            break;
        case 'minus_age_sage':
            newState.age -= payload
            break;
        default:
            return newState
    }
    return newState;
}

export default Reducer