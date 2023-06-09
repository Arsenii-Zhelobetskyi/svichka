import './_header.scss'
import {Link} from "react-router-dom";

function Header() {
    return (
       <header>
         <Link to={'/'} className="left-section link-reset">
             Svichka
         </Link>
       </header>
    );
}

export default Header;