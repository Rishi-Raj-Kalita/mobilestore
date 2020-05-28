import React,{createContext, useState} from "react"
import {storeProducts,detailProduct} from "./data"
import Details from "./components/Details";

export const ProductContext=createContext();
export const ProductProvider = props =>
{
    const[products,setProducts]=useState(storeProducts);
    const[detail,setDetail]=useState(detailProduct);
    const[item,setItem]=useState({})
    const[cart,setCart]=useState([]);//to be set to empty array later on
    const[subtotal,setSubtotal]=useState(0);

    const handleclick=(id)=>
    {
        const detailItem=products.find(item=>(item.id===id))
        setItem(detailItem);
        return(item);
    }
    const addtoCart=(id)=>
    {
        let tempProducts=[...products];
        tempProducts.map(data=>(data.id===id?(data.inCart=true,data.count=1,data.total=data.count*data.price):data=data));
        handleclick(id);
        const data=tempProducts.find(data=>(data.id===id))
        setCart(cart=>[...cart,data]);
        addTotal();
    }
    const increment=(id)=>
    {
        const tempCart=[...cart];
        const selectedProduct=tempCart.find(data=>(data.id===id))
        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
        product.count=product.count+1;
        product.total=product.count*product.price;
        setCart(tempCart);
    }
    const decrement=(id)=>
    {
        const tempCart=[...cart];
        const selectedProduct=tempCart.find(data=>(data.id===id))
        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
            if(product.count!==1)
            {
                return(
                product.count=product.count-1,
                product.total=product.count*product.price,
                setCart(tempCart))
            }
            else{
                return(
                removeItem(id))
            }
    }
    const removeItem=(id)=>
    {
        const tempCart=[...cart];
        tempCart.map(data=>data.id===id?(data.inCart=false,data.total=0,data.count=0):data);
        const temp=tempCart.filter(data=>(data.id!=id));
        setCart(temp);

    }
    const clearCart=()=>
    {
        const tempArr=[...cart];
        tempArr.map(data=>(
            data.inCart=false,data.total=0
        ))
        setCart([]);
        setSubtotal(0);
    }
    const addTotal=()=>
    {
        let subTotal=0;
        cart.map(data=>(subTotal+=data.total));
        setSubtotal(subTotal);
    }
    return(
    <ProductContext.Provider value={
     {
        products,
        setProducts,
        detail,
        setDetail,
        handleclick,
        item,
        setItem,
        addtoCart,
        cart,
        setCart,
        clearCart,
        increment,
        decrement,
        removeItem,
        subtotal,
        addTotal
     }

    }>
    {props.children}
    </ProductContext.Provider>) 
}
