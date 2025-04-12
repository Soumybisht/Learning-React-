import React from "react";
import ReactDOM from "react-dom/client";



const Header = ()=>{
    return (
        <div className="HeaderContainer">
            <div className="logoContainer">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const Cards = (props)=>{
    const {resInfo} = props;
    const {resName,foodName,resRating} = resInfo;
    return (
        <div className="card-container">
            <div className="img-container">
                <img className="food-image" src="https://static.investindia.gov.in/s3fs-public/2023-10/World%20Food%20Day%20India%E2%80%99s%20Push%20Towards%20Sustainable%20Food%20Practices.jpg" alt="" />
            </div>
            <div className="card-info">
                <h3>{resName}</h3>
                <h5>{foodName}</h5>
                <h5>{resRating} star rating </h5>
                <h5>Free Delivery</h5>
            </div>
        </div>
    )
}

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

const Body = ()=>{
    return (
        <div className="body-container">
            <div className="search-bar">
                <h2>Search</h2>
            </div>
            <div className="res-cards">
                {/* <Cards resName="KFC" foodName="Burger, Pizza, Chicken" resRating="4.6"/>
                <Cards resName="Maharaja Bhog" foodName="Indian, Italian, Chinese" resRating="4.1"/>
                <Cards resName="Burger King" foodName="Veg-Burger, Non-Veg Burger" resRating="4.2"/>
                <Cards resName="Dominos" foodName="Garlic Bread, Pizza, ChocoLavaCake" resRating="4.7"/>
                <Cards resName="Pizza Hut" foodName="Burger, Pizza, Coca-Cola" resRating="4.0"/> */}
                {resData.map((data)=>(
                    <Cards key={data.id} resInfo={data}/>
                ))} 
            </div> 

        </div>
    );
}

const Footer = ()=>{
    return (
        <div className="foot-container">
            <div className="info">
                <h3>Address: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sunt commodi qui cumque ratione alias impedit cum voluptatum possimus quasi? </h3>
            </div>
            <div className="copyright">
                <h2>Rights-Reserved</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, officiis?</h4>
            </div>
        </div>
    );
}

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
