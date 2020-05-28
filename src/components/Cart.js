import React,{useContext, useState} from "react"
import {ProductContext} from "../Context"
import CartColumns from "./CartColumns"
import Title from "./Title"
import EmptyCart from "./EmptyCart"
import CartList from "./CartList"
import CartTotal from "./CartTotal"
const Cart=()=>
{
    const{cart}=useContext(ProductContext)
    return(
        <div>
        {
            cart.length>0?(
            <div>
            <Title name="Your" title="Cart"/>
            <CartColumns/>
            <CartList/>
            <CartTotal/>
            </div>)
            :(<div><EmptyCart/></div>)
        }
        </div>)
}
export default Cart