import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar (){

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top " data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </Link>
                    </li>
                    <li clasNames="nav-item">
                        <Link to="About">
                        <a className="nav-link" href="#">About</a>
                        </Link>
                    </li>
                    <li clasNames="nav-item">
                        <Link to="Skills">
                            <a className="nav-link" href="#">Skills</a>
                        </Link>
                    </li>
                    <li clasNames="nav-item">
                        <Link to="Education">
                            <a className="nav-link" href="#">Education</a>
                        </Link>
                    </li>
                    <li clasNames="nav-item">
                        <Link to="Proyects">
                            <a className="nav-link" href="#">Proyects</a>
                        </Link>
                    </li>
                    <li clasNames="nav-item">
                        <Link to="Contact">                        
                            <a className="nav-link" href="#">Contact</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;