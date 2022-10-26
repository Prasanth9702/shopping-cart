import React from 'react'

function Cartlist({cartitems,removecart}) {
  return (<>
    <ol className="list-group list-group-numbered"><h2>  Cart</h2>
   {
    cartitems.map((item)=>{
      return <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.name}</div>
        Rs:{item.price}
      </div>
      < button type="button" className="btn btn-primary rounded-pill btn" onClick={()=>removecart(item)}
        
      >X</button>
    </li>
    })
   }
</ol>
<h3><b>Total:{
  cartitems.reduce((prev,current)=>{ 
    return prev=(prev+current.price)
    
  },0)
  }</b></h3>
</>
  )
}

export default Cartlist