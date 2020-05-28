import React,{useContext} from "react"
import {ProductContext} from "../Context"
const Details=()=>
{
    const{item,setItem}=useContext(ProductContext)
    {
        console.log("in detail",item)
    }
    return(
        <div>
            <div className="row">
                <div className="col-10">
                <h1 className="productName">{item.title}</h1>   
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <img src={item.img} className="productImage"/>
                </div>
            {item.id?(<div className="col-5">
                <h1 className="ProductTitle">Model :{item.title}</h1>
                <h1 className="MadeBy">Made by :{item.company}</h1>
                <h1 className="Price">Price:${item.price}</h1>
                <p className="Information"><h1 className="bold">Some info about the product:</h1><br></br>{item.info}</p></div>):
                (<p className="infoEmpty">Select any Item to view Description</p>)}
            </div>
        </div>
    )
}
export default Details