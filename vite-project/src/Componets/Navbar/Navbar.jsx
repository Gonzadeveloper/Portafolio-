import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#About">Sobre mi</a>
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