const initialState= {
    count:0
}

const CountReducer = (state=initialState,action) =>{
    console.count("countReducer");
    const  {type,payload} =action;

    switch(type){
        case "+":
            return{
                ...state,
                count:payload
            }
        default:
            return initialState;
    }
}

export default CountReducer