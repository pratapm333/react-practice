import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    console.log("items", items)
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    };

    return ( <div>
      { items.map((item)=>( 
        <div key={item.card.info.id} className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            
          </div>
        
          <p className="text-sm">{item.card.info.description}</p>
        </div>
        <div className="w-3/12 p-2">   
        <div className="absolute"> 
        <button className="bg-black text-white shadow-lg  p-2 mx-20 rounded-lg"
        onClick={() => handleAddItem(item)} >ADD +
        </button>
        </div>
     
            <img src={CDN_URL + item.card.info.imageId} className="rounded-lg "></img>
            </div>
         
        </div>
      ))}
    </div>
);
};

export default ItemList;