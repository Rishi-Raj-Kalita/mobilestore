import React,{useState,useContext} from "react"
import Product from "./Product"
import Title from "./Title"
import {ProductContext} from "../Context"
import {storeProducts} from "../data"
const ProductList=()=>
{
    const{products,setData,details,setDetails}=useContext(ProductContext);
    return(
        <div>
          <div className="row">
          <Title name="Our" title="Products" />
          </div>
          {
              products.map(product=>
                (
                    <Product product={product} key={product.id} className="col-3"/>
                )
                )
          }
          </div>
    
    )
}
export default ProductList