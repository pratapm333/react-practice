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
 <div className="card-item">
    <img src={CDN_URL+
    resData.info.cloudinaryImageId} />
       <h2>{name} </h2>
       <p>{cuisines.join(", ")}</p>
       <p>{avgRating}</p>
       <p>{costForTwo}</p>
    
       </div>
 );
 }

 export default RestaurantCard;