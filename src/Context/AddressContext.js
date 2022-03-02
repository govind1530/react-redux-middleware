import React from 'react';
import AddressContext from './Context';

const AddressProvider  = (props) =>{
    return(
        <AddressContext.Provider value={{city:"Jaipur",state:"Rajasthan"}}>
                {props.children}
        </AddressContext.Provider> 
    )
}

export default AddressProvider;