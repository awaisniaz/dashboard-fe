import FilterControl from "./filter-control"
function Filter() {
 const controls = [{
    title:'By Week',
    range:true,
    checked:false
 },{
    title:'By Month',
    range:false,
    checked:false
 },{
    title:'By Period',
    range:false,
    checked:true,
    select:true
 }]
  return (
    <div className="filter">{controls?.map(item=>{
        return <FilterControl {...item}  key={item?.title}/>
    })}</div>
  )
}

export default Filter