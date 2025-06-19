import Layout from './Componets/Layout/Layout';
import { Routes, Route } from 'react-router-dom'
import PortadaPF from './assets/CaratulasProyectos/Landing-page.webp'
import PortadaPI from './assets/CaratulasProyectos/PI-drivers-landingPage.webp'
import PortadaChatIA from './assets/CaratulasProyectos/CaratulaIA.webp'
import Detail from './Screens/Detail/Detail';
import Navbar from './Screens/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Style.css';
import IAhchat from './Screens/IA/IAchat';
import Button from './Componets/ButtonDarkMode/Button';

  const proyectosData = [
    {
      "id": 1,
      "nombre": "Chat IA",
      "descripcion": "Este es un proyecto donde podras usar chat IA local con el modelo llama 3",
      "img": PortadaChatIA,
      "linkGit": "https://github.com/Gonzadeveloper/Chat-IA-local",
      "linkDeploy":"https://chat-ia-local.vercel.app/",
      "linkYoutube":"",
      "progress":"Finalizado",
      "purpose":"Academico",
      "date":"06/2024"
    },
    {
      "id": 2,
      "nombre": "Electro emporium",
      "descripcion": "Marketplace orientado a compra y venta de productos de tecnología",
      "img": PortadaPF,
      "linkGit":"https://github.com/Gonzadeveloper/CashIn",
      "linkDeploy":"https://frontelectroemporium.vercel.app/#/",
      "linkYoutube":"",
      "progress":"Finalizado",
      "purpose":"Desarrollo independiente para cliente privado",
      "date":"05/2024"
    },
    {
      "id": 3,
      "nombre": "PI Drivers",
      "descripcion": "En esta app vas a poder ver todos los pilotos de la F1 y ademas crear nuevos!",
      "img": PortadaPI,
      "linkGit": "https://github.com/Gonzadeveloper/PI-drivers", 
      "linkDeploy":"https://pi-drivers-front.vercel.app/",
      "linkYoutube":"",
      "progress":"Finalizado",
      "purpose":"Academico",
      "date":"03/2024"
    }
  ]

function App() {
  return (
    <>
    <Navbar/>
    <IAhchat/>
    <Button/>
    <Routes>
        <Route path='/' element={<Layout proyectosData={proyectosData}/>}/>
        <Route path='/detail/:id' element={<Detail proyectosData={proyectosData}/>}/>
    </Routes>
    </>
  );
}

export default App;
