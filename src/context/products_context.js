//product_context is responsible to get products from api

import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'

// === Actions name import 
// We import only actions we use int this file - don't import all!
// These values contains action string value
// Purpose to prevent typo mistakes - instead of write: dispatch({type: 'SIDEBAR_OPEN'})
// we use predefined const: dispatch({type: SIDEBAR_OPEN})
// This way, we never will have typo issues - if it happens, will be error in variable usage rather than nothing
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

//Initial state of all parameters
const initialState = {
  isSidebarOpen:false
}

//Prevent props drilling - make it available for all children of this module
const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {

  //Set Reducer here
  const [state, dispatch] = useReducer(reducer, initialState)

  //Functions for open and close side bar implemented here
  const openSideBar = () => {
    console.log('[Info] openSidebar triggered')
    dispatch({type: SIDEBAR_OPEN})
  }

  const closeSideBar = () => {
    dispatch({type: SIDEBAR_CLOSE})
  }


  // Menaing of double {{}}: First we go to javascript language, second to object
  return (
    <ProductsContext.Provider value={{...state,openSideBar,closeSideBar}}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
