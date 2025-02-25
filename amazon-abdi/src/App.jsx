
import './App.css'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Switch, Route, Router } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
function App() {

  return (
    
      // <div className="app">
      //   <Routes>
      //     <Route path="/" >
      //       <Header />
      //       <Home />
      //     </Route>
      //   </Routes>
      // </div>
    <div>
      <Header />
            <Home />
    </div>
  )
}

export default App
