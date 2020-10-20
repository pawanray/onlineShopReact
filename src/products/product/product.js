import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Card from '../../components/card/card';

function Product(){
    let { id} = useParams();
    let [product,setProduct] = useState()
    useEffect(()=>{
        
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{
            setProduct(res.data)
        console.log("products", product)
        })  
    },[]) 
    
   
    return (
        <>
            <Card data={product} size="col-sm-12"/>
        </>
    )
}

export default Product