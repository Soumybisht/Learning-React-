import { useState } from "react";
import {LOGO} from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = ()=>{

    const onlineStatus = useOnlineStatus();
    const [logBtn,setLogBtn] = useState("Login");
    const togglebtn = ()=>{
        logBtn ==="Login" ? setLogBtn("Logout") : setLogBtn("Login");
    }
    return (
        <div className="flex justify-between align-middle bg-slate-300 shadow-lg border-opacity-35 border-2 border-black z-50">
            <div className="flex justify-center align-middle">
                <img className="h-28 pl-3" src={""+LOGO} alt="" />
            </div>
            <div className="text-xl text-"> 
                <ul className="flex py-3 my-10 mx-3 pr-3 text-center">
                    <li className="px-3" >Online Status: {(onlineStatus)?"🟢":"🔴"}</li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white" ><Link to="/">Home</Link></li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white" ><Link to="/grocery">Grocery</Link></li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white"><Link to="/about">About Us</Link></li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3 hover:bg-slate-600 hover:rounded-md hover:text-white">Cart</li>
                    <li className="px-3"><button className="rounded-full" onClick={togglebtn} >{logBtn}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;