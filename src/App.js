import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./Utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./Utils/store.js"
import Cart from "./components/Cart.js";

const Grocery = lazy(()=>import("./components/Grocery"));


const AppLayout = ()=>{
        //make an API call to get data.
    const [userData,setUserData] = useState({
        name:"Soumy Bisht",
        email:"soumybisht@gmail.com",
        age:22,
    })
    return (
        <div>
            <Provider store={store}>
                <UserContext.Provider value={{user:userData,setUser:setUserData}} >
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </UserContext.Provider>
            </Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<Shimmer/>} ><Grocery/></Suspense> 
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error />
    }
    
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
