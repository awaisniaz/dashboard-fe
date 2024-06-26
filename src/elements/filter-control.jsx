/* eslint-disable react/prop-types */
import { Checkbox, Input,Select } from "antd"

function FilterControl(props) {
  return (
    <div className="filter-control">
        <Checkbox  onChange={()=>{}} checked={props?.checked}>
          {props.title}
        </Checkbox>
        {
            props?.range ? <div className="filter-input">
                <Input type="text" value='June 24, 2024' width={100}/>
                <Input type="text"  value='June 30, 2024' width={100}/>
            </div> : props?.select ? <div className="filter-input"> <Select>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June 24, 2024</option>
                <option>June 30, 2024</option>
            </Select></div> : <div className="filter-input"><Input type="text"  value='June 24, 2024' width={100}/></div>
        }
    </div>
  )
}

export default FilterControl