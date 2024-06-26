import Analytics from '../../elements/analytics'
import Filter from '../../elements/filter'
import Header from '../../elements/header'
import './style.css'

const Dashboard = () => {
  return (
    <div className='dashboard'><Header/><Filter/><Analytics/></div>
  )
}
export default Dashboard