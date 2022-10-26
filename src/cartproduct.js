

function Cartproduct({all,cart,cartitems}) {

  return (<>
   
    <div className='col-lg-4 mt-2 p-2'>
    <div className="card" >
  <img src={all.img} className="rounded float-start" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{all.name}</h5>
    <p className="card-text">Price:{all.price}</p>
    <button disabled={cartitems.some(obj=>obj.id===all.id)} onClick={()=>{
      cart(all)
    }}  className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div></>
  )
}

export default Cartproduct