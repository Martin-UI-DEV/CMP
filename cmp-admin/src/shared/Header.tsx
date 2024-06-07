
function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-xxl">
                <a className="navbar-brand">CMP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" id="offcanvasExample" >
                    <div className="offcanvas-header">
                        <button className="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="Consultas.html" className="nav-link">Consultas</a>
                        </li>
                        <li className="nav-item">
                            <a href="Grupos.html" className="nav-link">Grupos</a>
                        </li>
                        <li className="nav-item">
                            <a href="Bailarinas.html" className="nav-link">Bailarinas</a>
                        </li>
                        <li className="nav-item">
                            <a href="Pagos.html" className="nav-link active">Pagos</a>
                        </li>
                        <li className="nav-item">
                            <a href="Asistencias.html" className="nav-link">Asistencias</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
