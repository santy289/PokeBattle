import logo from '../../assets/pokedex.png';
import { NavLink } from 'react-router-dom';
import './header.css';
function Header (){
return(
    <div className="header__main--container">
        <div className="header__logo--container">
            <img className="header__logo--image" src={logo} alt="logo"/>
            <h1 className="header__tittle">Poke Battle</h1>
        </div>
        <ul className="header__navbar">
            <NavLink className="header__navbar--navlink" to="/"><li className="header__navbar--item">Home</li></NavLink>
            <NavLink className="header__navbar--navlink" to="/lobby"><li className="header__navbar--item">Lobby</li></NavLink>
            <NavLink className="header__navbar--navlink" to="/pokedex"><li className="header__navbar--item">Pokedex</li></NavLink>
            <NavLink className="header__navbar--navlink" to="/profile"><li className="header__navbar--item">Profile</li></NavLink>
        </ul>
    </div>
)
}

export default Header;