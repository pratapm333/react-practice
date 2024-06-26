import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";


const Header =() =>{
   const [btnNameReact, setBtnNameReact] = useState("login");

   const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(UserContext);

   //subscribing the store using selector
   const cartItems = useSelector((store) => store.cart.items);
//console.log("cartItems "+ cartItems)
   return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
     <img className="w-36" src={LOGO_URL} alt="logo"/> 
       </div>
       <div className="flex align-middle">
       <ul className="flex p-4 m-4">  
       <li> online status: {onlineStatus ? "🟢" :   "🔴"      }</li> 
          <li className="px-4"> <Link to="/"> Home </Link></li> 
          <li  className="px-4"><Link to="/about">About</Link></li>
          <li  className="px-4"><Link to="/contact">Contact</Link></li>
          <li  className="px-4 font-bold text-xl"><Link to="/cart"> Cart - ({cartItems.length} items)</Link>
         </li> 
          <li  className="px-4">
            <button className="login" onClick={() =>{
             btnNameReact === "login" ?  setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}>
               {btnNameReact} 
            </button>
            </li>
            <li className="px-4">{loggedInUser}</li>
       </ul>
       </div>
       </div>
    );
    }

export default Header;    