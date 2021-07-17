import logo from '../img/logo.svg'
import menuMobile from '../img/menu-mobile.svg'
import closeMobile from '../img/close.svg'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {

    
    function openMenu() {
        const navigationMenu = document.getElementById('menu');
        navigationMenu.classList.toggle('active')
    }

    return (
        <>
            <header className="header"> 
                <div className="container header__container">
                    <Link to="/">
                        <img src={logo} alt="Logo Movie Test"  className='header__logo'/>
                    </Link>
                    <img src={menuMobile} alt="Menu Icon"  className='header__icon' onClick={openMenu}/>
                    <nav className="header__nav" id="menu">
                        <img src={closeMobile} alt="Close Menu Icon"  className='header__icon header__icon--close' onClick={openMenu} />
                        <ul>
                            <NavLink 
                                exact to="/"
                                activeClassName="selected"
                                className="header__nav__item">
                                Home
                            </NavLink>
                            <NavLink 
                                exact to="/categories"
                                activeClassName="selected"
                                className="header__nav__item">
                                Categories
                            </NavLink>
                            <NavLink 
                                exact to="/my-favorites"
                                activeClassName="selected"
                                className="header__nav__item">
                                My Favorites
                            </NavLink>
                        </ul>
                    </nav>
                    
                </div>
            </header>
        </>
    )
}