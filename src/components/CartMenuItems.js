import { MENU_ITEMS } from "../Utils/constants";

const CartMenuCards = ({name,price,imageId}) => {


    return (
        <div className="menuCard-container h-[230px] w-56 bg-[#f0f0f0] p-4 m-3 rounded-md shadow-lg hover:bg-slate-500 hover:text-white flex flex-col justify-between">
            <div>
                <div className="h-[140px] w-full rounded-md">
                    <img
                        className="food-image h-full w-full rounded-md object-cover"
                        src={MENU_ITEMS + imageId}
                        alt={name}
                    />
                </div>
                <div className="card-info text-center mt-3">
                    <h3 className="font-semibold text-base">{name}</h3>
                    <h4 className="font-semibold mt-1 text-sm">Price: ₹{price / 100}</h4>
                </div>
            </div>
        </div>
    );
};

export default CartMenuCards;
