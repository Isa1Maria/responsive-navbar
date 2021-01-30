import React, {useState} from 'react';
import './Navbar.css';
import {Menu} from './Menu';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
const menu= Menu.map(({url, title}, index) => {
    return (
        <li key={index}>
            <NavLink exact to={url} activeClassName="active">{title}</NavLink>
        </li>
    );
});

const handleClick = () => {
    setClicked(!clicked);
}
return (
 <nav>
     <div className="logo">
         Agri<font>Cultura</font>
     </div>
     <div className="menu-icon" onClick={handleClick}>
         <i className={clicked ? "fas fa-angle-down" : "fas fa-seedling"}></i>
         
     </div>
     <ul className={clicked ? "menu" : "menu close"}>{menu}</ul>
 </nav>
);
};

export default Navbar;