import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

//    const [resInfo, setResInfo] = useState(null);

    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId)
    /*useEffect(()=>{
        fetchMenu();
    }, [])

const fetchMenu = async () => {
    const data = await fetch ( MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log("res menu", json );
    setResInfo( json.data);
} */

if(resInfo === null ) return <Shimmer />

const {name,cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const {carousel} =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

console.log("itemCards ", carousel )
    return   (
        <div>
            <h1>{name}</h1>
            <h4> {cuisines}</h4>
            <h4> {costForTwoMessage}</h4>  
           <ul>
             
            {carousel.map((item) => (
               <li key={item.dish.info.id}> {item.dish.info.name} - Rs.{item.dish.info.defaultPrice/100 || item.dish.info.price/100}</li>
            ))}
           </ul>
        </div>
    )
}

export default RestaurantMenu; 