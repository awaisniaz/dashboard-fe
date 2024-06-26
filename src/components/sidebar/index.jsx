import Profile from '../../elements/avatar.jsx'
import { Logo } from '../../elements/logo.jsx'
import Menu from '../../elements/menu.jsx'
import './style.css'
import { IoMdMenu } from "react-icons/io";
export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
      <IoMdMenu className='menuIcon'/>
      <Logo/>
      <Menu/>
      </div>
      <div className='bottom'><Profile/></div>
    </div>
  )
}
