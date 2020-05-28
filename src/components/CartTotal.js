import React,{useContext} from "react"
import {ProductContext} from "../Context"
const CartTotal=()=>
{
    const{subtotal,clearCart}=useContext(ProductContext);
    return(
        <div>
            <div className="row">
                <div className="col-10">
                    <button className="clearcart" onClick={()=>clearCart()}>Clear Cart</button>
                </div>
            </div>
            <div className="row">
            <div className="col-10">
            <h1 className="text-title">Cart Subtotal:Rs{subtotal}</h1>
            </div>
            </div>
        </div>
    )
}
export default CartTotal