const preState = {
    fName:'',
    lName:'',
    age:0
}

const  Reducer=(state=preState, action)=>{
    console.count("Name Reducers")
    const newState  = {...state};
    const {type,payload} =action

    switch(type){
        case "changeFName":
            // return {
            //     ...state,
            //     fName:payload
            // }
            newState.fName = payload
            break;
        case "changeLName":
            // return {
            //         ...state,
            //         lName:payload
            //  }
            newState.lName = payload
            break;
    default:
            return state;
    }
    return newState
}

export default Reducer;