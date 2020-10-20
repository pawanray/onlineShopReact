import React, {useState, useEffect} from 'react';


import logo from './logo.svg';
import './App.css';
import AppHeader from './header/appHeader';
import {connect} from 'react-redux'
function App(props){

  return (
    <>
   
    <AppHeader/>
    <div className="App">
      {/* <Login usersList={userList}/>  */}
    </div>

    </>
  );
}
const mapStateToProps = (state) =>{
  console.log("app state", state)
  return{
    userName:state.username
  }
}
export default connect(mapStateToProps)(App);
