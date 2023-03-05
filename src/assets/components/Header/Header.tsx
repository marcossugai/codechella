import { useState } from 'react'
import './Header.css'

function Header() {
const CustomNav = ({ li }) => {
    const [window, setWindow] = useState(false);

    let openClose = () =>
    if (window === false) {setWindow(true)};
    else {setWindow(false)};

    return(
        <header className="header">
            <a href="#" className='header__logo'><img src="../src/assets/img/logoCodeChella.svg"></img></a>

            <nav className='navbar-menu' style={{ width: window === false ? 250 : 60 }}>
                <div className='burger' onClick={() => openClose()}>
                    <img src='.img/menu.svg' alt='burger' />
                </div>
                <ul className='navbar__list'>
                    {li.map((item, i) => (
                        <div className='navbar__li-box' key={i}>
                            <img
                            src={item[1]}
                            alt={item[1]}
                            style={{ paddingLeft: window ===false ? 27 : 17}}
                            />
                            <li
                            className='navbar__li'
                            style={{ display: window ===false ? | "inline-blcok" ; "none"}}
                            >
                                {item[0]}
                            </li>
                        </div>
                    ))}
                </ul>
            </nav>
            
        </header>
    )
}

export default Header