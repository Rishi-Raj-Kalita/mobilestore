import React, { useContext } from "react"
import CartItems from "./CartItem"
import {ProductContext} from "../Context"
const CartList=()=>
{
    const{cart,addTotal}=useContext(ProductContext)
    {
        addTotal();
        
    }
  return(
      <div>
          {
              cart.map(data=>(
                  <CartItems data={data} key={data.id} />
              ))

          }
      </div>
  )
}
export default CartList