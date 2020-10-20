


 const productsReducer = (state = "",productsAction) =>{
     debugger;
    if(productsAction.type="PRODUCTS"){
        return {
            ...state, products:productsAction.payload
        }
    }

}

export default productsReducer