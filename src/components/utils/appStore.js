import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./CartSlice"

const appStore= configureStore({
    // here we add the slices
    reducer:{
        Cart:cartReducer,
    }, 
})

export default appStore