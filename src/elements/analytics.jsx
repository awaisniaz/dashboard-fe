import { useEffect,useState } from "react"
import AnalyticsGraph from "./analytics-graph"
import axios from 'axios'
function Analytics() {

 
  const [graphdata, setGraphdata] = useState([])
  const [loading,setLoading] = useState(false)

  const graphs = [{
    title:'FSS Score Overview',
    description:'Detailed Store Performance BreakDown',
    type:'pie'
  },
    {
      title:'FSS Breakdown By Category',
      description:'Detailed breakdown by category',
      type:'bar'
    
  }]

  useEffect(()=>{
 getAnalyticsData()
  },[])

  const getAnalyticsData=async()=>{
    setLoading(true)
    axios.get('http://localhost:3000/api/get-dashboard-data').then(data=>{
      console.log(data?.data)
      setGraphdata(data?.data?.data)
      setLoading(false)
      

    }).catch(err=>{
      console.log(err)
      setLoading(false)
    });
  }
  return (
    <div className='analytics-container'>
      {
        graphs?.map(item=>{
          return  <AnalyticsGraph type={item?.type} title={item?.title} description={item?.description} loading={loading} data={graphdata} key={item?.title}></AnalyticsGraph>
        })
      }
    </div>
  )
}

Analytics.propTypes = {}

export default Analytics
