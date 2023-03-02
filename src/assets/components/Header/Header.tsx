import './Header.css'

function Header() {
    return(
        <header className="header">
            <a href="#" className='header__logo'><img src="../src/assets/img/logoCodeChella.svg"></img></a>

            <a href='#' className='header__menu'><img src='../src/assets/img/menu.svg'></img></a>

            <nav className="header__nav">
                <i className="fa-solid fa-bars nav__icone-menu"></i>
                <ul className="nav__lista hidden">
                    <li className="nav__item">
                        <a href="experiencia.html" className="p-bold nav__link">A experiência</a>
                        <i className="nav__barra"></i>
                    </li>
                    <li className="nav__item">
                        <a href="setores.html" className="p-bold nav__link">Mapa de Setores</a>
                        <i className="nav__barra"></i>
                    </li>
                    <li className="nav__item">
                        <a href="informacoes.html" className="p-bold nav__link">Informações</a>
                        <i className="nav__barra"></i>
                    </li>
                    <li className="nav__item">
                        <a href="ingresso.html" className="p-bold nav__link">Ingresso</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header