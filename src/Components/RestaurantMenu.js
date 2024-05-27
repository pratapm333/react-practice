import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
 

const RestaurantMenu = () => {

//    const [resInfo, setResInfo] = useState(null);

    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
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
//console.log("carousel ", carousel )
  
//console.log("itemCards ", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]) 

const categories = 
resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> 
    c.card?.["card"]?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
);
//let arr = [...Object.values(categories)];

 
 
//console.log("categories"+ categories)  
    return   ( 
      
        <div className="text-center">
             
               
           
            <h1 className="font-bold text-lg">{name}</h1>
            <p className="font-bold text-lg"> {cuisines.join(", ")} - {costForTwoMessage}</p>
            
          
             
            {categories.map((category,index) => 
            ( <RestaurantCategory key={category?.card?.card?.title} 
                data={category?.card?.card} 
                showItems={index === showIndex ? true :false} 
                setShowIndex = { ()=>setShowIndex(index) }/>)
            )}
        
           
        </div>
        
    )
}

export default RestaurantMenu; 