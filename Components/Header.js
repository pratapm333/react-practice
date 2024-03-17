const Header =() =>{return (
    <div className="header-container">
     <img src={require("../Images/food.png")} alt="logo"/> 
       
    
       <div className="menu-bar">
       <ul>
          <li>Home</li> 
          <li>Menu</li>
          <li>orders</li>
          <li>Cart</li>
       </ul>
       </div>
       </div>
    );
    }

export default Header;    