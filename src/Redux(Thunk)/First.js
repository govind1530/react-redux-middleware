import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {changeFirstName,changeLastName} from './Action';

const First = () =>{
    const dispatch = useDispatch()
    const state= useSelector(state => state)
    console.log("first",state?.userInfo);
    React.useEffect(()=>{
         dispatch(changeFirstName())
         dispatch(changeLastName())
    },[])
    return (
        <div>
            First
        </div>
    )
}

export default First