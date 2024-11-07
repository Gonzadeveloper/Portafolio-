import React from 'react';
import Home from './Componets/Home/Home';
import Navbar from './Componets/Navbar/Navbar';
import Cards from "./Componets/Proyects/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import About from './Componets/About/About';
import Contact from './Componets/Contact/Contact';
import IAhchat from './Componets/IA/IAchat';
import TitleChange from './Componets/Title/Title';


function App() {
  return (
      <div className='container divApp'>
        <TitleChange/>
        <IAhchat/>
        <Navbar/>
        <Home/>
        <About/>
        <Cards/>
        <Contact/>
      </div>

  );
}

export default App;
