
import RestaurantCard from "./RestaurantCard" ;
import { useState } from "react";
import resList  from "../utils/mockData";


const Body = () => { 
    
const [ListOfResturants, setListOResturant] = useState(resList);
 
return(
<div className="body">
    <div className="filter">
        <button className="filter-btn" 
         onClick= { () => {
        const filterList =  ListOfResturants.filter(
                (res) =>  res.info.avgRating > 4.6
            
          ); setListOResturant(filterList);
          console.log(filterList)
        }
    }
        >Top rated</button>
    </div>

    <div className="body-container">
       {ListOfResturants.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} /> 
       ))}
  
      
    </div> 
  </div>
 );
 }

 export default Body;