import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return   <div className="text-center m-4 p-4">
  <h1 className="font-bold text-lg">Cart</h1>
<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
   
    <button className="p-4 m-4 bg-black text-white" onClick={handleClearCart} >Clear Cart</button>
    {cartItems.length === 0 && <h1>Cart is empty. Please add to carts</h1>}
    <ItemList items={cartItems} />

  </div>
            </div>
}

export default Cart;