import React from 'react';
import './Navbar.css';
import {Menu} from './Menu';

const Navbar = () => {
const menu= Menu.map(({url, title}, index) => {
    return (
        <li key={index}>
            <a href={url}>{title}</a>
        </li>
    );
});
return (
 <nav>
     <div className="logo">
         Agri<font>Cultura</font>
     </div>
     <ul className="menu">{menu}</ul>
 </nav>
);
};

export default Navbar;