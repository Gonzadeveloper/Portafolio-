import Layout from './Componets/Layout/Layout';
import { Routes, Route } from 'react-router-dom'
import PortadaPF from './assets/CaratulasProyectos/Landing-page.webp'
import PortadaPI from './assets/CaratulasProyectos/PI-drivers-landingPage.webp'
import PortadaChatIA from './assets/CaratulasProyectos/CaratulaIA.webp'
import PortadaCashIN from './assets/CaratulasProyectos/CashIn.webp'
import PortadaInProgess from './assets/CaratulasProyectos/360_F_763658319_8jp09Awn0bT00DYXwQd4GzzRVbG2jY9a.webp'
import PortadaFueltWay from './assets/CaratulasProyectos/FluentWay.webp'
import Detail from './Screens/Detail/Detail';
import Navbar from './Componets/Navbar/Navbar';
import IAhchat from './Screens/IA/IAchat';
import Button from './Componets/ButtonDarkMode/Button';

  const proyectosData = [
    {
      "id": 7,
      "nombre": "AppCar",
      "descripcion": "Una app pensada para el mercado automotor argentino con el objetivo de combatir el fraude en la venta de autos usados, especialmente la adulteración de kilometraje, mediante el uso de registros públicos, verificación cruzada y tecnología OCR",
      "descripcionLarga": "AppCar es una aplicación desarrollada para el mercado automotor argentino, con el objetivo de combatir el fraude en la venta de autos usados, particularmente la adulteración del kilometraje. La app busca brindar mayor seguridad y transparencia a los compradores mediante la verificación cruzada de datos.\n\nUtiliza registros públicos, comparación de información histórica del vehículo y tecnologías como OCR para facilitar la validación de datos. Además, permite consultar información sobre el historial del auto desde distintas fuentes, aportando una capa adicional de control para el usuario.\n\nEl proyecto está siendo desarrollado como una solución innovadora y escalable que integra React Native para el frontend móvil, Node.js en el backend, y scripts en Python para automatizar la extracción de datos de fuentes externas.",  
      "miParticipacion": "Mi participación en este proyecto fue total, asumiendo el desarrollo completo desde cero.\n\nMe encargué de definir y construir la estructura de la aplicación utilizando React Native para el frontend móvil y Node.js con Express para el backend. Además, desarrollé un script en Python capaz de extraer información desde páginas web públicas con datos de autos y su kilometraje, con el objetivo de realizar verificaciones cruzadas en tiempo real dentro de la app.\n\nEsta automatización permite a los usuarios contar con un doble check sobre el estado real del vehículo, aportando transparencia y seguridad en el proceso de compra. El proyecto me permitió integrar tecnologías variadas y trabajar sobre una problemática real con impacto en el mercado local.",
      "img": PortadaInProgess,
      "linkGit": "https://github.com/Gonzadeveloper/CarApp",
      "linkDeploy":"",
      "linkYoutube": "",
      "progress": "En proceso",
      "purpose": "Desarrollo independiente",
      "date": "06/2025",
      "Frameworks": ["Node.js", "ReactNative"],
      "librerias": ["JWT","Sequelize"],
      "lenguajes":["JS", "Python"],
      "otrasHerramientas":["NPM", "PosgreSQL"]
    },
    {
      "id": 6,
      "nombre": "FluentWay",
      "descripcion": "Landing page informativa sobre cursos de inglés, que incluye un sistema de registro e inicio de sesión de usuarios, además de una sección detallada con información sobre los distintos packs de cursos disponibles, sus beneficios y precios.",
      "descripcionLarga": "FluentWay es una landing page informativa centrada en la oferta de cursos de inglés, diseñada para captar nuevos estudiantes y ofrecer información clara sobre los distintos packs disponibles.\n\nLa plataforma permite a los usuarios registrarse, iniciar sesión, y explorar los beneficios y precios de cada modalidad de curso. Cuenta con un sistema de autenticación con JWT, una base de datos relacional en PostgreSQL, y fue desarrollada siguiendo prácticas modernas de desarrollo web.\n\nEste proyecto fue concebido como un MVP funcional para un cliente privado, integrando tanto una interfaz clara y responsiva como una estructura de backend sólida.",  
      "miParticipacion": "Mi participación en este proyecto fue total, desarrollando tanto el frontend como el backend de manera independiente.\n\nSeguí fielmente un diseño entregado previamente en formato Canva, asegurando que la interfaz final coincidiera visualmente con lo propuesto. Implementé toda la estructura del frontend utilizando React, gestioné la lógica del registro e inicio de sesión de usuarios con autenticación JWT, y desarrollé la base de datos en PostgreSQL con Sequelize como ORM.\n\nFue una experiencia completa en la que pude aplicar habilidades técnicas, interpretación de requerimientos de diseño, y organización del código tanto a nivel visual como estructural.",
      "img": PortadaFueltWay,
      "linkGit": "https://github.com/Gonzadeveloper/FluentWay",
      "linkDeploy":"",
      "linkYoutube": "",
      "progress": "Finalizado (MVP)",
      "purpose": "Desarrollo independiente para cliente privado",
      "date": "03/2025",
      "Frameworks": ["Node.js"],
      "librerias": ["React", "Sequelize", "JWT"],
      "lenguajes":["JS"],
      "otrasHerramientas":["PosgreSQL", "NPM", "CSS3", "HTML5"]
    },
    {
      "id": 5,
      "nombre": "Pedilo",
      "descripcion": "Una app De viajes estilo Uber",
      "descripcionLarga": "Pedilo es una aplicación de viajes que replica el funcionamiento de plataformas como Uber o Cabify. Está compuesta por dos apps móviles desarrolladas con React Native: una para el cliente y otra para el conductor.\n\nLa app permite a los usuarios solicitar viajes, localizar conductores cercanos mediante coordenadas, y seguir el trayecto en tiempo real. Utiliza WebSockets para mantener una comunicación bidireccional y en tiempo real entre el cliente y el conductor, garantizando actualizaciones instantáneas del estado del viaje.\n\nEl sistema también cuenta con lógica para emparejar al conductor más cercano basado en latitud y longitud, asegurando un servicio rápido y eficiente. Está siendo desarrollado como un proyecto independiente, con una arquitectura robusta y escalable para el futuro.",
      "miParticipacion": "Como desarrollador back-end fui responsable de preparar toda la lógica necesaria para conectar el backend con el frontend mediante WebSockets.\n\nDiseñé e implementé la lógica de conexión en tiempo real, permitiendo el intercambio de ubicaciones y estados del viaje entre conductor y cliente.\n\nAdemás, desarrollé un algoritmo basado en coordenadas (latitud y longitud) que permite encontrar al conductor más cercano a cada cliente, optimizando así los tiempos de respuesta y el emparejamiento de usuarios.\n\nEsta experiencia fue clave para aplicar lógica geoespacial y manejo de conexiones en tiempo real en una arquitectura distribuida.",
      "img": PortadaInProgess,
      "linkGit": "https://github.com/Gonzadeveloper/PruebaViaje",
      "linkDeploy":"",
      "linkYoutube": "",
      "progress": "En proceso",
      "purpose": "Desarrollo independiente",
      "date": "06/2025",
      "Frameworks": ["Node.js", "ReactNative"],
      "librerias": ["JWT"],
      "lenguajes":["JS", "TS"],
      "otrasHerramientas":["NPM", "PosgreSQL"]
    },
    {
      "id": 4,
      "nombre": "CashIn",
      "descripcion": "Plataforma web para la gestión de finanzas personales con recomendaciones personalizadas mediante IA, chatbot financiero, análisis de gastos y recursos educativos. Permite agendar asesorías con expertos.",
      "descripcionLarga": "CashIn es una plataforma web diseñada para la gestión de finanzas personales, que ofrece recomendaciones personalizadas impulsadas por inteligencia artificial. El objetivo del sistema es brindar a los usuarios una experiencia completa para analizar su situación financiera, acceder a recursos educativos y agendar asesorías con expertos.\n\nEl proyecto incluye funcionalidades como la creación de perfiles financieros, categorización automática mediante machine learning, un chatbot financiero que responde consultas en lenguaje natural, y un panel para el análisis de ingresos, gastos y deudas. También ofrece acceso a cursos y material educativo adaptado al perfil del usuario.\n\nLa aplicación fue desarrollada con tecnologías modernas como Node.js, Next.js, PostgreSQL, React y Redux. Es un MVP funcional orientado a clientes reales, pensado como una solución escalable para integrarse en entornos empresariales o educativos.",  
      "miParticipacion": "Mi rol en este proyecto fue como único desarrollador back-end. Me encargué del diseño, modelado y creación completa de la base de datos utilizando PostgreSQL.\n\nDesarrollé toda la arquitectura del servidor con Node.js y Express, implementando rutas y controladores para gestionar las distintas funcionalidades de la aplicación.\n\nAdemás, implementé la autenticación de usuarios utilizando OAuth para logins mediante Google y Facebook, asegurando un sistema seguro y escalable para la gestión de sesiones e identidades.\n\nEste proyecto fue una excelente oportunidad para aplicar conocimientos avanzados de back-end, estructuración de APIs REST y trabajo con autenticación externa en un entorno profesional.",
      "img": PortadaCashIN,
      "linkGit": "https://github.com/Gonzadeveloper/CashIn",
      "linkDeploy":"",
      "linkYoutube": "",
      "progress": "Finalizado (MVP)",
      "purpose": "Desarrollo independiente para cliente privado",
      "date": "09/2024",
      "Frameworks": ["Node.js", "Next"],
      "librerias": ["React", "Redux", "Sequelize"],
      "lenguajes":["JS"],
      "otrasHerramientas":["PosgreSQL", "NPM", "CSS3", "HTML5"]
    },
    {
      "id": 3,
      "nombre": "Chat IA",
      "descripcion": "Este es un proyecto donde podras usar chat IA local con el modelo llama 3",
      "descripcionLarga":"Chat IA es una aplicación desarrollada con JavaScript puro, HTML5 y CSS3 que permite interactuar con un modelo de inteligencia artificial de manera local, sin depender de servicios en la nube. El proyecto utiliza el modelo LLaMA 3 y explora tecnologías avanzadas como WebGPU para el uso de la GPU desde el navegador y Web Workers para ejecutar tareas en segundo plano mediante hilos separados.\n\nLa interfaz es simple pero funcional, y permite realizar preguntas al modelo y recibir respuestas directamente en el navegador. El sistema está pensado como una prueba técnica para comprender los desafíos y posibilidades de correr modelos de IA directamente desde el entorno del cliente. Además, demuestra que es posible crear entornos de prueba con capacidades de procesamiento sin necesidad de backend.",
      "miParticipacion":"Este proyecto fue desarrollado completamente por mí, impulsado por la curiosidad de explorar cómo cargar y ejecutar un modelo de inteligencia artificial en local desde el navegador. Mi objetivo era entender cómo funciona la inferencia de modelos ligeros del lado del cliente, sin servicios externos.\n\nDurante el desarrollo:\n- Implementé toda la lógica en JavaScript puro.\n- Utilicé WebGPU para acceder a la GPU del dispositivo y optimizar el rendimiento del modelo.\n- Incorporé Web Workers para procesar tareas pesadas sin bloquear el hilo principal.\n- Diseñé una interfaz sencilla con HTML5 y CSS3 para facilitar la interacción con el modelo.\n- Integré el modelo LLaMA 3 localmente para responder preguntas directamente desde el navegador.\n- Me aseguré de que el sistema pudiera funcionar con solo abrir el HTML, sin instalaciones complejas.\n\nEste proyecto fue una experiencia muy enriquecedora y representó un primer paso para entender cómo funciona el procesamiento de modelos IA en entornos locales, abriendo nuevas puertas para desarrollos futuros sin depender de servidores externos.",
      "img": PortadaChatIA,
      "linkGit": "https://github.com/Gonzadeveloper/Chat-IA-local",
      "linkDeploy":"https://chat-ia-local.vercel.app/",
      "linkYoutube":"",
      "progress":"Finalizado",
      "purpose":"Academico",
      "date":"06/2024",
      "lenguajes":["JS"],
      "otrasHerramientas":["CSS3", "NPM", "HTML5"]
    },
    {
      "id": 2,
      "nombre": "Electro emporium",
      "descripcion": "Marketplace orientado a compra y venta de productos de tecnología",
      "descripcionLarga":"Electro Emporium es un Marketplace académico desarrollado en el contexto de un proyecto grupal, con el objetivo de simular una plataforma real de compra y venta de productos tecnológicos. El proyecto fue desarrollado con tecnologías del stack PERN (PostgreSQL, Express, React, Node.js), junto con herramientas modernas como TypeScript, Redux, Sequelize y Bootstrap para la interfaz. El sistema permite a los usuarios registrarse, explorar productos, realizar búsquedas, aplicar filtros y ordenar resultados, así como agregar productos al carrito y realizar pagos simulados a través de la integración con la API de MercadoPago. También cuenta con paneles diferenciados para usuarios comunes y administradores, quienes pueden gestionar productos y ver estadísticas de ventas. Entre las funcionalidades destacadas se encuentran el carrito de compras con persistencia, la navegación protegida, el diseño responsivo, y la organización clara de categorías y condiciones de los productos. El proyecto fue desplegado exitosamente y representa un entorno de e-commerce funcional que simula una tienda online completa.",
      "miParticipacion": "En este proyecto asumí un rol principal en el desarrollo frontend y la organización general del equipo. Fui responsable de:\n\n- Diseñar y estructurar el frontend completo con React + Vite.\n- Definir y configurar las rutas de navegación con React Router DOM.\n- Implementar la gestión de estado global con React Redux, lo que permitió mantener sincronizados los filtros, productos, y el carrito de compras.\n- Integrar el frontend con la lógica del backend, asegurando una correcta comunicación con los endpoints de Express y la base de datos PostgreSQL.\n- Seleccionar el stack tecnológico adecuado para frontend y backend, según las necesidades del proyecto.\n- Liderar la coordinación del equipo y guiar el desarrollo general del producto, cuidando aspectos técnicos y de experiencia de usuario.\n- Llevar a cabo la integración con MercadoPago para simular procesos de pago reales.\n\nEste proyecto fue una experiencia clave para mejorar mis habilidades en desarrollo web colaborativo, arquitectura de aplicaciones y toma de decisiones técnicas.",
      "img": PortadaPF,
      "linkGit":"https://github.com/Gonzadeveloper/Proyecto-E-Commerce",
      "linkDeploy":"https://frontelectroemporium.vercel.app/#/",
      "linkYoutube":"",
      "progress":"Finalizado",
      "purpose":"Academico",
      "date":"05/2024",
      "Frameworks": ["Node.js"],
      "librerias": ["React", "Redux", "Sequelize", "Bootstrap"],
      "lenguajes":["TS"],
      "otrasHerramientas":["PosgreSQL", "NPM", "CSS3"]
    },
    {
      "id": 1,
      "nombre": "PI Drivers",
      "descripcion": "En esta app vas a poder ver todos los pilotos de la F1 y ademas crear nuevos!",
      "descripcionLarga": "Este proyecto fue desarrollado utilizando el stack PERN (PostgreSQL, Express.js, React.js y Node.js) y tiene como objetivo practicar y consolidar los conocimientos adquiridos en el desarrollo web full stack. La aplicación permite visualizar y administrar información sobre corredores de forma dinámica e interactiva, consumiendo datos desde una API externa y combinándolos con una base de datos propia. A través de la interfaz, el usuario puede buscar corredores, visualizar información detallada, aplicar filtros y ordenamientos personalizados, y también crear nuevos corredores que se almacenan en la base de datos. Se trabajó especialmente en asegurar que los filtros y ordenamientos no dependan de los resultados pre-filtrados de la API externa, sino que se apliquen desde el frontend o el backend, lo cual implicó manipular correctamente los datos obtenidos. Este proyecto no solo cumple con los requerimientos técnicos del desafío, sino que además me permitió experimentar con conceptos clave como consumo de APIs, diseño de bases de datos relacionales, lógica de controladores en el backend y gestión de estado en el frontend con React.",
      "miParticipacion": "Todo el proyecto fue desarrollado por mí de forma individual. Esto incluyó tanto el frontend como el backend, el diseño de la base de datos, la integración con la API externa, la creación de rutas, controladores y lógica para filtrar y ordenar los datos correctamente. Fue una experiencia muy valiosa que me permitió entender y aplicar en profundidad los conceptos del stack PERN, como el uso de Express para la lógica del servidor, PostgreSQL y Sequelize para manejar relaciones entre modelos, y React para crear componentes reutilizables e interactivos. Además, aprendí a manejar flujos de datos, errores, validaciones y peticiones asincrónicas de forma más eficiente. Este proyecto fue una base sólida que me permitió iniciarme de lleno en el mundo del desarrollo web full stack. Me ayudó a integrar todo lo aprendido y a desarrollar buenas prácticas para enfrentar futuros desafíos técnicos en equipo o de forma individual.",
      "img": PortadaPI,
      "linkGit": "https://github.com/Gonzadeveloper/PI-drivers", 
      "linkDeploy":"https://pi-drivers-front.vercel.app/",
      "linkYoutube":"",
      "progress":"Finalizado",
      "purpose":"Academico",
      "date":"03/2024",
      "Frameworks": ["Node.js"],
      "librerias": ["React", "Redux", "Sequelize"],
      "lenguajes":["JS"],
      "otrasHerramientas":["PosgreSQL", "NPM", "CSS3", "HTML5"]
    },
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
