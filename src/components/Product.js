import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {ProductContext} from "../Context"
const Product=(product)=>
{
    const{handleclick,addtoCart}=useContext(ProductContext)
    const{id,title,img,cart,inCart,price}=product.product
    return(
        <div >
            <div className="images">
            <ul className="mobile">
                <li className="col-3" >
                    <Link to="/details">
                    <img  src={img} alt="not found" id={id} onClick={()=>handleclick(id)}/>
                    </Link>
                    <li className="productTitle">{title}</li>
                    <li className="productTitle">Price:Rs{price}</li>
                    <li>
                        <Link to="/cart">
                        <button className="addToCart" disabled={inCart?true:false} onClick={()=>{addtoCart(id)}}>
                        {inCart?(<p className="text-title">In Cart</p>):<i className="fas fa-cart-plus">add to cart</i>}
                        </button>
                        </Link>
                    </li>
                </li>
            </ul>
            </div>
        </div>
        )
}
export default Product