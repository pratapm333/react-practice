import {CDN_URL} from "../utils/constants"
 
const RestaurantCard = (props) => {
    const {resData} = props;
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
    
       </div>
 );
 }

 export default RestaurantCard;