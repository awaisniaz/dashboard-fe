
import './App.css'
import Dashboard from './components/dashboard/index.jsx'
import { Sidebar } from './components/sidebar/index.jsx'

function App() {

  return (
    <div className='container'>
      <Sidebar/>
      <Dashboard/>
    </div>   
    
  )
}

export default App
