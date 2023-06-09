import Icon from "../Icon/Icon.jsx";
import "./_sidebar.scss"
import {Link} from "react-router-dom";

const sidebarItems = [
    {
        display: 'Discovery',
        icon: <Icon i={'discover-inactive'}/>,
        // to: '/Discovery'
    },
    {
        display: 'Top Rated',
        icon: <Icon i={'topRated-inactive'}/>,
        // to: '/Toprated'
    },
    {
        display: 'Coming Soon',
        icon: <Icon i={'comingSoon-inactive'}/>,
        // to: '/ComingSoon'
    }

]

function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="sidebar__MENU">MENU</div>
            {sidebarItems.map((item, index) => (
                <Link to={item.display.replace(
                    /\s+/g,
                    ""
                )} className="sidebar__row link-reset" key={index}>
                    <div> {item.icon} </div>
                    <div className="sidebar__display"> {item.display}</div>
                </Link>
            ))}
        </nav>
    );
}

export default Sidebar;