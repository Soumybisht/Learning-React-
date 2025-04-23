import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { MENU_ITEMS } from "../Utils/constants";



const MenuCards = (props) => {
    
    const { name, price, imageId, description } = props?.card?.info;


    const dispatch = useDispatch();

    const handleItems = ()=>{
        dispatch(addItem(props?.card?.info));
    }

    return (
        <div className="menuCard-container h-[340px] w-56 bg-[#f0f0f0] p-4 m-3 rounded-md shadow-lg hover:bg-slate-500 hover:text-white flex flex-col justify-between">
            <div>
                <div className="h-[140px] w-full rounded-md">
                    <img
                        className="food-image h-full w-full rounded-md object-cover"
                        src={MENU_ITEMS + imageId}
                        alt={name}
                    />
                </div>
                <div className="card-info text-center mt-3">
                    <h3 className="font-semibold text-sm">{name}</h3>
                    <p className="text-xs mt-1 max-h-[60px] overflow-y-auto px-1 scrollbar-hide">{description}</p>
                    <h4 className="font-semibold mt-1 text-sm">Price: ₹{price / 100}</h4>
                </div>
            </div>
            <button className="bg-green-500 p-1 text-white text-xs rounded-sm mt-2" onClick={()=> handleItems()} >Add to Cart</button>
        </div>
    );
};

export default MenuCards;
