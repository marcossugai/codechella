import './Header.css'

function Header() {
    return(
        <header className="header">
            <a href="#" className='header__logo'><img src="../src/assets/img/logoCodeChella.svg"></img></a>

            <img src='../src/assets/img/menu.svg' className='header__menu'></img>

            <nav className="vertical-menu">
                <a href="#" className="active"></a>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
            </nav>

            
        </header>
    )
}

export default Header