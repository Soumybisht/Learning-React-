import { useState } from "react";
import {LOGO} from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = ()=>{

    const onlineStatus = useOnlineStatus();
    const [logBtn,setLogBtn] = useState("Login");
    const togglebtn = ()=>{
        logBtn ==="Login" ? setLogBtn("Logout") : setLogBtn("Login");
    }

    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between align-middle bg-slate-300 shadow-lg border-opacity-35 border-2 border-black z-50">
            <div className="flex justify-center align-middle">
                <img data-testid="logo" className="h-28 pl-3" src={LOGO} alt="" />
            </div>
            <div className="text-xl text-"> 
                <ul className="flex py-3 my-10 mx-3 pr-3 text-center">
                    <li data-testid="online-status" className="px-3" >Online Status: {(onlineStatus)?"🟢":"🔴"}</li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white" ><Link to="/">Home</Link></li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white" ><Link to="/grocery">Grocery</Link></li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white"><Link to="/about">About Us</Link></li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white"><Link data-testid="cart" to="/cart" >Cart {cartItems.length} items</Link></li>
                    <li className="px-3"><button className="rounded-full" onClick={togglebtn} >{logBtn}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;