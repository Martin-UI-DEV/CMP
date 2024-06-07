
import { Link } from 'react-router-dom';


function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-xxl">
                <Link to="Consultas" className="navbar-brand">CMP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" id="offcanvasExample" >
                    <div className="offcanvas-header">
                        <button className="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="Consultas" className="nav-link">Consultas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Grupos" className="nav-link">Grupos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Bailarinas" className="nav-link">Bailarinas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Pagos" className="nav-link active">Pagos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Asistencias" className="nav-link">Asistencias</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
