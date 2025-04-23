import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
});

export default store;



/* 
- create redux store using configureStore() -RTK
- Provide my store to app using Provider component <Provider store={store}> - react-redux
-create cartSlice using createSlice({})
-give name to slice
    -give initial state({})
    -give reducers({}) it contains actions like addItems etc
    -addItems : (state,action)=>{state.items.push()}
    -export cartSlice.reducer
    -export actions like {addItems} from cartSlice.actions


*/