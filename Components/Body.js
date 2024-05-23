
import RestaurantCard from "./RestaurantCard" ;
import { useState, useEffect } from "react";
import resList  from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => { 

 
    
const [ListOfResturants, setListOResturant] = useState([]);
const [filteredResturant, setFilteredResturant] = useState([]);
const [searchText, setSearchText] = useState("");

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
    <div className="filter">

        <input type="text" className="search-box" value={searchText}
         onChange={(e)=>{setSearchText(e.target.value)}}/>

        <button onClick={()=>{
            console.log(searchText);
           const filteredResturant = ListOfResturants.filter((res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setFilteredResturant(filteredResturant);
           
        }}>Search</button>

        <button className="filter-btn" 
         onClick= { () => {
        const filterList =  ListOfResturants.filter((res) =>  res.info.avgRating > 4.6 
          ); 
          setListOResturant(filterList)
          console.log("ListOfResturants", ListOfResturants)
        }
    }
        >Top rated</button>
    </div>

    <div className="body-container">
       {filteredResturant.map((resturant) => (
          <Link 
          key={resturant.info.id}
          to={"/restaurant/" + resturant.info.id} >
          <RestaurantCard  resData={resturant} /> 
          </Link>
       ))}
  </div>
      
    
  </div>
 );
 }

 export default Body;