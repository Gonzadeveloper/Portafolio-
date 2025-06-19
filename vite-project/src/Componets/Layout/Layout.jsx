import About from "../../Screens/About/About";
import Contact from "../../Screens/Contact/Contact";
import Home from "../../Screens/Home/Home";
import Cards from "../../Screens/Proyects/Cards";
import TitleChange from "../../Utils/Title/Title";
import ComponenteScroll from "../ComponenteScroll/ComponenteScroll";

function Layout ({proyectosData}){
    return(
       <div className='container divApp'>
               <TitleChange/>
               <Home/>
               <ComponenteScroll direction="left">
                 <About/>
               </ComponenteScroll>
               <ComponenteScroll direction="right">
                 <Cards proyectosData={proyectosData}/>
               </ComponenteScroll>
               <ComponenteScroll direction="left">
                 <Contact/>
               </ComponenteScroll>
             </div> 
    )
}

export default Layout;