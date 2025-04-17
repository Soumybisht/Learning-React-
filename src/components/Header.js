import { useState } from "react";
import {LOGO} from "../Utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [logBtn,setLogBtn] = useState("Login");
    const togglebtn = ()=>{
        logBtn ==="Login" ? setLogBtn("Logout") : setLogBtn("Login");
    }
    return (
        <div className="HeaderContainer">
            <div className="logoContainer">
                <img className="logo" src={""+LOGO} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={togglebtn} >{logBtn}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;