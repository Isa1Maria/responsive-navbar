import react from 'react';
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
         Van<font>Gogh</font>
     </div>
     <ul className="menu">{menu}</ul>
 </nav>
);
};

export default Navbar;