import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";







const resData  = [
    {
        id:1,
        resName:"KFC",
        foodName:"Burger, Pizza, Chicken",
        resRating:"4.6"
    },
    {
        id:2,
        resName:"Maharaja Bhog",
        foodName:"Indian, Italian, Chinese",
        resRating:"4.1" 
    },
    {
        id:3,
        resName:"Burger King", 
        foodName:"Veg-Burger, Non-Veg Burger", 
        resRating:"4.2"
    },
    {
        id:4,
        resName:"Dominos", 
        foodName:"Garlic Bread, Pizza, ChocoLavaCake", 
        resRating:"4.7"
    },
    {
        id:5,
        resName:"Pizza Hut", 
        foodName:"Burger, Pizza, Coca-Cola", 
        resRating:"4.0"
    }
];





const AppLayout = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
