import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header =() =>{
   const [btnNameReact, setBtnNameReact] = useState("login");
   useEffect(()=>{}, [])

   return (
    <div className="header-container">
     <img src={require("../Images/food.png")} alt="logo"/> 
      
       <div className="menu-bar">
       <ul>
          <li> <Link to="/"> Home </Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart </li> 
          
            <button className="login" onClick={() =>{
             btnNameReact === "login" ?  setBtnNameReact("Logout") : setBtnNameReact("login")
            }}>
               {btnNameReact} 
            </button>
           
       </ul>
       </div>
       </div>
    );
    }

export default Header;    