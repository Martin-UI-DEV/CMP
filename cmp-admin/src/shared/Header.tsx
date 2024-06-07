
import { Link, NavLink } from 'react-router-dom';

const navigation = [
    {name:'Consultas', href: 'Consultas'},
    {name:'Grupos', href: 'Grupos'},
    {name:'Bailarinas', href: 'Bailarinas'},
    {name:'Pagos', href: 'Pagos'},
    {name:'Asistencias', href: 'Asistencias'}
]

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
                        {navigation.map((item) => (
                            <li className="nav-item" key={item.name} data-bs-dismiss="offcanvas">
                                <NavLink to={item.href} className={({ isActive }) => { return 'nav-link ' + (isActive ? 'active' : '')}}>
                                    {item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
