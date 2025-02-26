// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import reducer, { initialState } from './reducer.jsx'
// import {StateProvider} from "./StateProvider.jsx"
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <StateProvider initialState={initialState} reducer={reducer}>
//      <App />
// </StateProvider>,
// </StrictMode>,
// )
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
    <App />
  </BrowserRouter>,
    </StateProvider>
  </StrictMode>

);

