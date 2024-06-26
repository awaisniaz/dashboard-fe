import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BiSolidReport } from "react-icons/bi";
import { MdOutlineInsights } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import './style.css'
const Menu = () => {
  const menuOption = [{
    title: 'Dashboard',
    path: '/dashboard',
    icon:<TbLayoutDashboardFilled className="icon"/>
  },{
    title:'Reports',
    path: '/reports',
    icon:<BiSolidReport className="icon"/>
  },{
    title:'Insights',
    path: '/insights',
    icon:<MdOutlineInsights className="icon"/>
  },{
    title:'Analytics',
    path: '/analytics',
    icon:<SiGoogleanalytics className="icon"/>
  }]
  return (
    <ul>
      {menuOption.map((item, index) => (
        <li key={index} className={item?.path === '/dashboard' ? 'active' : ''}>
        <div className="sidebar-icon"></div>
         <div className="sidebar-text">{item?.icon}<span>{item.title}</span></div>
        </li>
      ))}
    </ul>
  )
}

export default Menu