import About from "../../Screens/About/About";
import Contact from "../../Screens/Contact/Contact";
import Home from "../../Screens/Home/Home";
import Proyects from "../../Screens/Proyects/Proyects";
import TitleChange from "../../Utils/Title/Title";
import ComponenteScroll from "../ComponenteScroll/ComponenteScroll";
import './Layout.css'

function Layout ({proyectosData}){
    return(
       <div className='divApp'>
               <TitleChange/>
               <Home/>
               <ComponenteScroll direction="left">
                 <About/>
               </ComponenteScroll>
               <ComponenteScroll direction="right">
                 <Proyects proyectosData={proyectosData}/>
               </ComponenteScroll>
               <ComponenteScroll direction="left">
                 <Contact/>
               </ComponenteScroll>
             </div> 
    )
}

export default Layout;