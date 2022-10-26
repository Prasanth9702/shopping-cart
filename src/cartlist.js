import React from 'react'

function Cartlist({cartitems,removecart}) {
  return (
    <>{
        cartitems.length === 0 ? <h4>No Items in Cart</h4> :
            <>
                <ol className="list-group list-group-numbered">
                    {
                        cartitems.map((items) => {
                            return <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{items.name}</div>
                                    Rs.{items.price}
                                </div>
                                <button onClick={() => {
                                    removecart(items.id)
                                }} className="badge bg-primary rounded-pill">X</button>
                            </li>
                        })
                    }
                </ol>
                <h3>Total Price : Rs.{
                    cartitems.reduce((prev, curr) => {
                        return prev = prev + curr.price;

                    }, 0)
                }</h3>
            </>
    }
    </>
)
}

export default Cartlist