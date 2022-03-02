import React,{Fragment,useContext} from 'react';
import NameProvider from './NameProvider';
import NameContext from './Context'
import AddressProvider from './AddressContext';
import AddressContext from './Context';
const FirstName = () =>{
const {name} = useContext(NameContext)
    return(
        <Fragment>
        <h1>FirstName:{name}</h1>
        <SecondName/>
        </Fragment>
    )
}

const SecondName = () =>{
    const {lastName} = useContext(NameContext)
    return(
        <h1>SecondName:{lastName}</h1>
    )
}
const CityName = () =>{
    const {city} = useContext(AddressContext)
    return(
        <>
        <h1>cityName:{city}</h1>
        <StateName/>
        </>
    )
}
const StateName = () =>{
    const {state} = useContext(AddressContext)
    return(
        <h1>stateName:{state}</h1>
    )
}

export default function App() {
  return (
    <div>
        <NameProvider>
            <FirstName/>
        </NameProvider>
        <AddressProvider>
            <CityName/>
        </AddressProvider>
    </div>
  )
}
