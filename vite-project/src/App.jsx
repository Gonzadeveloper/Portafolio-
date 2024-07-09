import React from 'react';
import Home from './Componets/Home/Home';
import Navbar from './Componets/Navbar/Navbar';
import Cards from "./Componets/Proyects/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import About from './Componets/About/About';
import Contact from './Componets/Contact/Contact';


function App() {
  return (
      <div className='container divApp'>
        <Navbar/>
        <Home/>
        <About/>
        <Cards/>
        <Contact/>
      </div>

  );
}

export default App;
