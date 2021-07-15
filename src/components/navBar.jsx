import { useState } from 'react'
import logo from '../img/logo.svg'
import menuMobile from '../img/menu-mobile.svg'
import closeMenu from '../img/close.svg'
export const NavBar = () => {

    const [ hidden, setHidden ] = useState(false);

    function openMenu() {
        setHidden(true)
    }
    function hiddenMenu() {
        setHidden(false)
    }

    return (
        <>
            <header className="header"> 
                <div className="container header__container">
                    <img src={logo} alt="Logo Movie Test"  className='header__logo'/>
                    <img src={menuMobile} alt="Menu Icon"  className='header__icon' onClick={openMenu} />
                    <nav className="header__nav" hidden={!hidden}>
                        <img src={closeMenu} alt="Close Menu Icon"  className='header__icon header__icon--close' onClick={hiddenMenu} />
                        <ul>
                            <li className="header__nav__item">Home</li>
                            <li className="header__nav__item">Categories</li>
                            <li className="header__nav__item">My Favorites</li>
                        </ul>
                    </nav>
                    
                </div>
            </header>
        </>
    )
}