import "./About.css"
import React, { useState } from 'react';

function About (){

    const [activeTab, setActiveTab] = useState('skills'); // Estado local para controlar la pestaña activa

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container containerAbout" id="About">
            <div>
                <img src="https://png.pngtree.com/thumb_back/fw800/background/20230720/pngtree-d-rendering-of-a-futuristic-office-with-green-wall-plants-and-image_3721525.jpg" alt="" />
            </div>
            <div>

                <h3>Sobre mi</h3>

                <p>Soy desarrollador Full Stack, apasionado por la tecnología, los videojuegos y la música. Mi naturaleza curiosa y mi constante deseo de aprender me han llevado a explorar el apasionante campo de la tecnología de la información. Sin duda, una de las experiencias más motivadoras fue mi acercamiento al código. Siempre estoy buscando formas de mejorar y aprender más sobre las últimas tecnologías y tendencias en el mundo del desarrollo web. Mi principal objetivo es impactar al mundo con código.</p>
           

                <div className="tabs-container">
                    <div className="tabs">
                        <button
                        className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                        onClick={() => handleTabClick('skills')}
                        >
                        Skills
                        </button>
                        <button
                        className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => handleTabClick('education')}
                        >
                        Education
                        </button>
                        <button
                        className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                        onClick={() => handleTabClick('certifications')}
                        >
                        Certifications
                        </button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'skills' && (
                         <div className="skills-list">
                         <ul className="skills-columns">
                             <li>JavaScript</li>
                             <li>React</li>
                             <li>Node.js</li>
                             <li>Redux</li>
                             <li>SQL</li>
                             <li>Express</li>
                         </ul>
                         <ul className="skills-columns">
                             <li>Vite</li>
                             <li>GIT</li>
                             <li>TypeScript</li>
                             <li>Next.js</li>
                         </ul>
                     </div>
                        )}
                        {activeTab === 'education' && (
                        <div>
                            <li>Full Stack, Henry</li>
                            <li>Lic. Comunicación social</li>
                        </div>
                        )}
                        {activeTab === 'certifications' && (
                        <div>
                            <ul>
                                <li>
                                    <a href="d2rf2c6bvm78n9.cloudfront.net/new-cert?id=04efae9801215f6765c9c966ad493509922b772a90d2515041fa4ecc14f3f77d">Full Stack, Henry</a>
                                    
                                </li>
                                <li>
                                <a href="https://cert.efset.org/RGUthW">English A2, Efset</a>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default About 