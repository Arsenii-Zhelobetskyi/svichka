import Icon from "../Icon/Icon.jsx";
import "./_sidebar.scss"
import {Link, useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const sidebarItems = [
    {
        display: 'Discovery',
        icon: 'discover',
        // to: '/Discovery'
        section: 'Discovery'
    },
    {
        display: 'Top Rated',
        icon: 'topRated',
        // to: '/Toprated'
        section: 'TopRated'
    },
    {
        display: 'Coming Soon',
        icon: 'comingSoon',
        // to: '/ComingSoon'
        section: 'ComingSoon'
    }

]

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);

    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sideBarItem = sidebarRef.current.querySelector('.sidebar__row')
            indicatorRef.current.style.height = `${sideBarItem.clientHeight}px`
            setStepHeight(32 + sideBarItem.clientHeight)
        }, 50)
    }, [])

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem)

    }, [location])

    return (
        <nav className="sidebar">
            <div className="sidebar__logo">MENU</div>
            <div ref={sidebarRef} className='sidebar__menu'>
                <div ref={indicatorRef} className="sidebar__menu__indicator"
                     style={{
                         transform: `translateX(-500%) translateY(${activeIndex * stepHeight}px)`
                     }}
                ></div>
                {sidebarItems.map((item, index) => (
                    <Link to={item.display.replace(
                        /\s+/g,
                        ""
                    )} className={`sidebar__row ${activeIndex === index ? 'pick-out' : ''} link-reset`} key={index}
                         >
                        <img
                            src={`../../src/assets/icons/${item.icon}-${activeIndex === index ? 'active' : 'inactive'}.svg`}
                            alt="🧭"
                            className='sidebar__icon'/>
                        <div className="sidebar__display"> {item.display}</div>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;