

import Checkout from "./Checkout"
import './App.css'
import { Route, Routes,} from 'react-router-dom';

import Header from './Header'
import Home from './Home'
function App() {

  return (
    
   <div className="app">
  <Header />
   <Routes>
       <Route path = "/checkout" element = {<Checkout/>}/>
       <Route path = "/" element = {<Home/>}/>
      </Routes>











    
      {/* <Home/> */}
        </div>
 
  )
}

export default App
