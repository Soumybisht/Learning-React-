import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import MenuCards from "./MenuCards";
import CartMenuCards from "./CartMenuItems";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();

    const clearCartItems = ()=>{
        dispatch(clearCart());
    }

    if(cartItems.length===0){
        return <div className="text-5xl font-semibold text-center m-4 p-2">Your Cart is Empty!!</div>
    }
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Cart Items</h1>
      <h1 className="text-2xl text-center">Total Items - {cartItems.length}</h1>
      <button className="bg-red-400 rounded-sm p-1 text-sm text-white m-3" onClick={clearCartItems}>Clear Cart</button>
      <div className="flex flex-wrap mt-3">
        {cartItems.map((item)=>{
            return <CartMenuCards key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default Cart;
