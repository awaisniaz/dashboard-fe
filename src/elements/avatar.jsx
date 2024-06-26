import { Avatar } from 'antd';
import './style.css'
function Profile() {
  return (
    <div className='avatar'>
        <Avatar size={40} >AN</Avatar>
        <div className='name'>
            <h4>Awais Niaz</h4>
            <p>awaisniaz@gmil.com</p>
        </div>
    </div>
  )
}

export default Profile