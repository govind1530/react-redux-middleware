const changeFirstNameAction = (type,payload) =>{
        return {
            type:type,
            payload:payload
        }
}

const changeFirstName = () =>{
//    return changeFirstNameAction("changeFName","govind")
return (dispatch) =>{
    dispatch(changeFirstNameAction("changeFName","govind"))
}
}

const changeLastNameAction = (type,payload) =>{
    return {
        type:type,
        payload:payload
    }
}

const changeLastName = () =>{
return changeLastNameAction("changeLName","maheshwari")
}

export  {changeFirstName,changeLastName}