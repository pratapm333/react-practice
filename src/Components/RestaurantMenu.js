import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
 

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
      
        <div className="px-4 py-4">
             
              <div className="px-4 sm:px-0 w-80 grid-cols-2"> 
            <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-7 text-gray-900">{name}</h1>
            <h4 className="block text-sm font-medium leading-6 text-gray-900"> {cuisines}</h4>
            <h4 className="block text-sm font-medium leading-6 text-gray-900"> {costForTwoMessage}</h4>  
           <ul className="divide-y divide-gray-100">
             
            {carousel.map((item) => (
               <li className="flex justify-between gap-x-6 py-5" key={item.dish.info.id}> {item.dish.info.name} - Rs.{item.dish.info.defaultPrice/100 || item.dish.info.price/100}</li>
            ))}
           </ul>
           </div>
        </div>
        </div>
    )
}

export default RestaurantMenu; 