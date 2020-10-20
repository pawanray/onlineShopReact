import React,{useState,useEffect} from 'react';
import Card from '../components/card/card';
import axios from 'axios';
import productImg from '../assets/img/bannerImg.jpg';
import {connect} from 'react-redux';
import { usersAction, productsAction } from '../actions/actions';
function Products(props){
    console.log(props)
    const [productsArry,setProducts] = useState() 
        
        useEffect(()=>{ 
            props.fetchProductsData()
            //console.log("products", props.fetchProductsData())
            console.log("props product", props.products)
            //setProducts(props.products)
            // axios.get('https://fakestoreapi.com/products').then(res=>{
            //     setProducts(res.data)
            // //console.log("products", products)
            // })  
        },[]) 

        function getProductData(productData){
          console.log(productData)
         }

         
    return(
        
        <div className="container-fluid">
              {JSON.stringify(productsArry)}
            {/* userName { JSON.stringify(props)} */}
            {/* <button onClick={()=>{props.changeName("Vinod")}}>Change Name</button> */}
            <div className="row mb-3">
                 <img src={productImg} className="bannerImg"/>
            </div>
          
            <div className="row"><Card data={props.products} size="col-sm-4"  handleClick={(productData)=>{getProductData(productData)}}/></div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    debugger
    console.log("state product", state.products.products)
    return{
      products:state.products.products
    }
  }
  const mapDispatchToProps = (dispatch) =>{
      debugger
      return{
        fetchProductsData:() => {dispatch(productsAction())}
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Products);
