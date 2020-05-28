import React from "react"
const CartColumns=()=>
{
    return(<div className="nomobile">
        <div className="row">
            <div className="col-2">
             <h1>Product</h1>
            </div>
            <div className="col-2">
            <h1>
                Name
            </h1>
            </div>
            <div className="col-1">
            <h1>Price</h1>
            </div>
            <div className="col-2">
            <h1>Quantity</h1>
            </div>
            <div className="col-1">
             <h1>Remove</h1>
            </div>
            <div className="col-2">
             <h1>Total</h1>
            </div>

        </div>
    </div>)
}
export default CartColumns