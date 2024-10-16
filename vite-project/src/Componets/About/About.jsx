import React, { useState } from 'react';
import Mifoto from '../../assets/1666750518940.webp'
import './About.css';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container containerAbout" id="About">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <img
            src={Mifoto}
            className="img-fluid"
          />
        </div>
        <div className="divSobremi col-12 col-md-6">
          <h3 className='h3personzalizado'>Sobre mí</h3>
          <p>
            Soy desarrollador Full Stack, apasionado por la tecnología, los videojuegos y la música. Mi naturaleza
            curiosa y mi constante deseo de aprender me han llevado a explorar el apasionante campo de la tecnología
            de la información. Sin duda, una de las experiencias más motivadoras fue mi acercamiento al código.
            Siempre estoy buscando formas de mejorar y aprender más sobre las últimas tecnologías y tendencias en el
            mundo del desarrollo web. Mi principal objetivo es impactar al mundo con código.
          </p>
          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => handleTabClick('skills')}
              >
                <h5 className='h5rebelde'>Skills</h5>
              </button>
              <button
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => handleTabClick('education')}
              >
                <h5 className='h5rebelde'>Education</h5>
              </button>
              <button
                className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={() => handleTabClick('certifications')}
              >
                <h5 className='h5rebelde'>Certifications</h5>
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
                      <a href="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=04efae9801215f6765c9c966ad493509922b772a90d2515041fa4ecc14f3f77d">
                        Full Stack, Henry
                      </a>
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
    </div>
  );
}

export default About;