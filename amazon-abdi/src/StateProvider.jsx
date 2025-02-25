// import { useReducer } from "react";
// import PropTypes from "prop-types";
// import StateContext from "./StateContext";

// import { createContext, useContext, useReducer } from "react";

// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// StateProvider.propTypes = {
//   reducer: PropTypes.func.isRequired,
//   initialState: PropTypes.any.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export const useStateValue = () => useContext(StateContext); 
import {createContext, useContext, useReducer} from "react"
import PropTypes from "prop-types"
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export const useStateValue = () => useContext(StateContext);
