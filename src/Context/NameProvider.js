import React from 'react';
import NameContext from './Context';

const NameProvider  = (props) =>{
    return(
        <NameContext.Provider value={{name:"govind",lastName:"maheshwari"}}>
                {props.children}
        </NameContext.Provider> 
    )
}

export default NameProvider;