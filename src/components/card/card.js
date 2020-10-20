import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function htmlProductData(product, url, id, size, handleClick){
    if(product){
        let isRow =  size === "col-sm-12" ? "row" : "";
        let imgDivSize = size === "col-sm-12" ? "col-sm-3 text-center" : "text-center";
        let detailtDiv = size === "col-sm-12" ? "col-sm-9" : "mt-2";
        let postionItem = size === "col-sm-12" ? "text-left" : "text-center";

        if(size !== "col-sm-12"){
            product.title = product.title.slice(0,30) + "...";
            product.description = product.description.slice(0,100) + "...";
        }
    return (
        <div className={size}>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className={isRow}>
                            <div className={imgDivSize}>
                            <img src={product.image}  width="200" height="200"/>
                            </div> 
                            <div className={detailtDiv}>
                            <h5>{product.title}</h5>
                            <h6 className="text-muted">{product.category}</h6>
                            <p>{product.description}</p>
                            <h3 className={postionItem}>${product.price}</h3>
                            <div className={postionItem}>
                            {id ? '' :  <Link className="btn btn-primary mr-2" to={`${url}/${product.id}`}>View Product</Link>}
                            <button onClick={()=> handleClick(product)} className="btn btn-primary">Add to Cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    )
    }
}

function Card({data,size, handleClick}){
    let { path, url } = useRouteMatch();
    let {id} = useParams();
    let isDaataArry = Array.isArray(data)
    console.log("id ", id, size) 
    return (
        <> 
        {isDaataArry ? data.map(product=>{
            return (
                htmlProductData(product, url, id, size, handleClick)
            )
        }) : htmlProductData(data, url, id, size, handleClick)}
        </>
     )
    }
    
export default Card
