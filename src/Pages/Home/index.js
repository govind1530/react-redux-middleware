import React from 'react';
import NavBar from '../../Components/Navbar';
import AppSection from './AppSection';
import CardSection from './CardSection';
import HeroSection from './HeroSection';
import Footer from './Footer';
const Home = () =>{
return(
    <div>
    <NavBar/>
    <HeroSection/>
    <AppSection/>
    <CardSection/>
    <Footer/>
    </div>
)
}

export default Home;