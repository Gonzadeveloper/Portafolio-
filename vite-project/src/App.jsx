import React from 'react';
import Home from './Componets/Home/Home';
import Navbar from './Componets/Navbar/Navbar';
import About from './Componets/About/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import Contact from './Componets/Contact/Contact';
import Skills from './Componets/Skills/Skills';
import Education from './Componets/Education/Education';
import Proyects from './Componets/Proyects/Proyects';

function App() {
  return (
    <Router>
        <Navbar />
      <div className='container divApp'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Education' element={<Education/>} />
          <Route path='/Proyects' element={<Proyects/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
