
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard" ;
import { useState, useEffect, useContext } from "react";
import resList  from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => { 

 
    
const [ListOfResturants, setListOResturant] = useState([]);
const [filteredResturant, setFilteredResturant] = useState([]);
const [searchText, setSearchText] = useState("");

const {loggedInUser, setUserName} = useContext(UserContext);

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setListOResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
 
const onlineStatus = useOnlineStatus();

if(onlineStatus === false) {
  return  (<h1>Please check your network</h1>)
}
 
return ListOfResturants.length === 0 ? 
(<Shimmer />) : (
<div className="body">

    <div className="filter m-4 p-4">
 
        <input type="text" className="px-4 py-2 bg-slate-200 border-solid border-2 border-gray-300 " 
        value={searchText}
         onChange={(e)=>{setSearchText(e.target.value)}}/>

        <button className="px-4 py-2 bg-slate-200 m-4 p-4 rounded-lg"  onClick={()=>{ 
            console.log(searchText);
           const filteredResturant = ListOfResturants.filter((res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setFilteredResturant(filteredResturant);
           
        }}>Search</button>

<label> User name : <input className="border border-black p-2" 
value={loggedInUser} 
onChange={(e) => setUserName(e.target.value)}/></label>  
 </div>
  

    <div className="flex flex-wrap ">
       {filteredResturant.map((resturant) => (
          <Link 
          key={resturant.info.id}
          to={"/restaurant/" + resturant.info.id} >
        { resturant.info.veg ? (<RestaurantCardPromoted resData={resturant} />)  : 
         (<RestaurantCard  resData={resturant} /> )
        }
          </Link>
       ))}
  </div>
      
    
  </div>
 );
 }

 export default Body;