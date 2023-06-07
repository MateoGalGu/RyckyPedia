import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SearchComponent } from './SearchComponent';
import { useContext } from 'react';
import { AuthContex } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const {user, logout} = useContext(AuthContex)

    const navigate = useNavigate();

    const onLogout = () => {
        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 ">
            <img src="/assets/Logo (2).png" alt="Logo" className='logo' />

            <Link
                className="navbar-brand rickypedia"
                to="/"
            >
                Rickypedia
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/aliens"
                    >
                        Aliens
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/humanoids"
                    >
                        Humanoids
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/humans"
                    >
                        Humans
                    </NavLink>
                </div>


            </div>

            <SearchComponent />



            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        {user?.name}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}