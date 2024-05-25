import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header =() =>{
   const [btnNameReact, setBtnNameReact] = useState("login");

   const onlineStatus = useOnlineStatus();


   useEffect(()=>{}, [])

   return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
     <img className="w-36" src={require("../Images/food.png")} alt="logo"/> 
       </div>
       <div className="flex align-middle">
       <ul className="flex p-4 m-4">  
       <li> online status: {onlineStatus ? "🟢" :   "🔴"      }</li> 
          <li className="px-4"> <Link to="/"> Home </Link></li> 
          <li  className="px-4"><Link to="/about">About</Link></li>
          <li  className="px-4"><Link to="/contact">Contact</Link></li>
          <li  className="px-4">Cart </li> 
          <li  className="px-4">
            <button className="login" onClick={() =>{
             btnNameReact === "login" ?  setBtnNameReact("Logout") : setBtnNameReact("login")
            }}>
               {btnNameReact} 
            </button>
            </li>
       </ul>
       </div>
       </div>
    );
    }

export default Header;    