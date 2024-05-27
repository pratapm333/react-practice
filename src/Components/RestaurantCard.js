import { useContext } from "react";
import {CDN_URL} from "../utils/constants"
import UserContext from "../utils/userContext";
 
const RestaurantCard = (props) => {
    const {resData} = props;

    const {loggedInUser} = useContext(UserContext);

    const {
       name,
      cuisines,
      avgRating,
      costForTwo
    } = resData?.info;
    return(
 <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
    <img src={CDN_URL+
    resData.info.cloudinaryImageId} className="rounded-lg"/>
       <h2 className="font-bold py-2 text-lg">{name} </h2>
       <p>{cuisines.join(", ")}</p>
       <p>{avgRating}</p>
       <p>{costForTwo}</p>
      <p>USER: {loggedInUser}</p>
       </div>
 );
}
 export const withPromotedLabel = (RestaurantCard) =>{
   return(props) =>{
      return(
         <div>
            <label className="absolute bg-black text-orange-50 rounded-lg m-2 p-2">Veg</label>
            <RestaurantCard {...props}/>
         </div>
      );
   };
 };
 

 export default RestaurantCard;