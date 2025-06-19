import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <button className="navbar-toggler" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link1 active" href="#Home">Home</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav-right">
                        <li className="nav-item">
                            <a className="nav-link" href="#About">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Proyects">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
