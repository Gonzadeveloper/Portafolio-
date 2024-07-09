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
                <img src="https://awerty.net/wp-content/uploads/2022/10/ventajas-seguridad-escritorio-virtual.png" alt="" />
            </div>
            <div>

                <h3>Sobre mi</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa sed laboriosam asperiores labore voluptate mollitia. Voluptatibus distinctio ipsa perspiciatis magni quibusdam ea dignissimos. Quos quod aliquid ut illum placeat.</p>
           

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
                        <div>
                            <h2>Skills</h2>
                            <p>Aquí va la información sobre skills.</p>
                        </div>
                        )}
                        {activeTab === 'education' && (
                        <div>
                            <h2>Education</h2>
                            <p>Aquí va la información sobre education.</p>
                        </div>
                        )}
                        {activeTab === 'certifications' && (
                        <div>
                            <h2>Certifications</h2>
                            <p>Aquí va la información sobre certifications.</p>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default About 