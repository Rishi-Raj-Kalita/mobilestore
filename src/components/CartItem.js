import React,{useContext} from "react"
import {ProductContext} from "../Context"
const CartItems=data=>
{
    const{title,img,id,price,total,count}=data.data;
    const{increment,decrement,removeItem}=useContext(ProductContext)
    return(
        <div className="shadow">
            <div className="row">
                <div className="col-2">
                <img className="CartImage" src={img} alt="img"/> 
                </div>
                <div className="col-2">
                 <h1 className="text-header">{title}</h1>    
                </div>
                <div className="col-1">
                <h1 className="text-header"><div className="yesmobile">Price:</div>Rs{price}</h1>    
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-3">
                            <button className="countchange" onClick={()=>decrement(id)}>-</button>    
                        </div>
                        <div className="col-3">
                            <button className="count">{count}</button>    
                        </div>
                        <div className="col-3">
                            <button className="countchange" onClick={()=>increment(id)}>+</button>    
                        </div>
                    </div>
                </div>
                <div className="col-1">
                <i className="fas fa-trash" onClick={()=>removeItem(id)}>Delete</i>    
                </div>
                <div className="col-2 lastcol">
                <h1 className="text-header"><div className="yesmobile">Total:</div>Rs{total}</h1>    
                </div>                   
            </div>
        </div>
    )

}
export default CartItems