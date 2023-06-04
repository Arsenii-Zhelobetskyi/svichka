import Icon from "../Icon/Icon.jsx";
import "./_sidebar.scss"
const sidebarItems=[
    {
        display:'Discovery',
        icon: <Icon i={'discover-inactive'}/>
    },
    {
        display:'Top rated',
        icon: <Icon i={'topRated-inactive'}/>
    },
    {
        display:'Coming Soon',
        icon: <Icon i={'comingSoon-inactive'}/>
    }

]
function Sidebar() {
    return (
        <nav className="sidebar">
        <div className="sidebar__MENU">MENU</div>
            {sidebarItems.map((item, index)=>(
            <div className="sidebar__row" key={index}>
                <div> {item.icon} </div>
                <div className="sidebar__display"> {item.display}</div>
            </div>
            ))}
        </nav>
    );
}

export default Sidebar;