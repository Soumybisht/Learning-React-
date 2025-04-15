import {LOGO} from "../Utils/constants";

const Header = ()=>{
    return (
        <div className="HeaderContainer">
            <div className="logoContainer">
                <img className="logo" src={""+LOGO} alt="" />
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

export default Header;