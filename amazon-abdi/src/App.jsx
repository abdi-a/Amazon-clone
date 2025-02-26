import { useReducer, useEffect } from "react";
import Login from "./login"
import Checkout from "./Checkout"
import './App.css'
import { Route, Routes,} from 'react-router-dom';
import {auth} from "./firebase"
import Header from './Header'
import Home from './Home'
function App() {
  const initialState = { user: null };
  const reducer = (state, action) => {
      switch (action.type) {
          case 'SET_USER':
              return { ...state, user: action.user };
          default:
              return state;
      }
  };
  const [, dispatch] = useReducer(reducer, initialState);



useEffect(() => {

  auth.onAuthStateChanged(authUser =>{
    console.log("THE AUTH USER IS", authUser);
   if (authUser) {
  dispatch({
    type: 'SET_USER',
    user: authUser
  })
   } else {
 dispatch({
  type: 'SET_USER',
  user: null
 })
   }
    
  })




},[])



  return (
    
   <div className="app">
            <Header />
     
      
   <Routes>  
       <Route path = "/login" 
       
       element = {<Login/>}
       
       />
       <Route    path = "/checkout" 

       element = {<Checkout/>}/>
       


       <Route path = "/" element = {<Home/>}/>
      </Routes>









    

    
      {/* <Home/> */}
        </div>
 
  )
}

export default App
