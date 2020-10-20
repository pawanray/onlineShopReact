import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, Redirect
  } from "react-router-dom";
import Login from '../login/login';
import Product from '../products/product/product';
import Products from '../products/products';
import {connect} from 'react-redux';
function AppHeader(){
    return(
        <>
             <Router>
      <div>
          <div className="menubar col-12">
              <div className="row">

          <div className="logo col-sm-3"><i className="fa fa-shopping-cart"></i>Online Shopping</div>
          <div className="col-sm-9">
            <ul>
            <li>
                <NavLink exact activeClassName="active" to="/">Products</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="active" to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="active" to="/cart">Cart</NavLink>
            </li>
            </ul>
        </div>
        </div>
        </div>
        <Switch>
            {/* <Redirect to="/products"/> */}
            <Route path="/products" exact component={Products}/>
             <Route path="/products/:id" exact component={Product}/>
             <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
        </>
    )
}

const mapStateToProps = (state) =>{
    console.log("userLogid", state)
    debugger
    return {
        userLogedIn:state
    }
}

// const mapDistachToProps = (dispatch) =>{
//     debugger
//     return {
//         fetchUsers:() => {dispatch(usersAction())},
//         userLogedInHandler:(userLogedInObj) => {dispatch(usersLogedInAction(userLogedInObj))}
//     }
// }

export default connect(mapStateToProps)(AppHeader)

