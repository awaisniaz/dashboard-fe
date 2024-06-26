import './style.css';
import
{ Button,
Select }
from
"antd"
;
export default function Header() {
  return (
    <>
    <div className='header'>
        <div className='name'><h3>Welcome, Awais</h3></div>
        <div className='action'>
            <Select defaultValue="All Stores" style={{ width: 120 }} >
                <option value="All Stores">All Stores</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </Select>
            <Button type='primary'>Export as Pdf</Button>
            <Button type='primary'>Send Ranking in Email</Button>
        </div>
    </div>
     <div className='mobile-header'>
     <div className='name'><h3>Welcome, Awais</h3>
     <Select defaultValue="All Stores" style={{ width: 120 }} >
             <option value="All Stores">All Stores</option>
             <option value="2">2</option>
             <option value="3">3</option>
         </Select></div>
     <div className='action'>
         
         <Button type='primary'>Export as Pdf</Button>
         <Button type='primary'>Send Ranking in Email</Button>
     </div>
 </div>
 </>
  )
}
