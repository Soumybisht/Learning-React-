import {MENU_ITEMS} from "../Utils/constants";

const MenuCards = (props)=>{
    const {resData} = props;
    const {name,price,imageId,description} = resData?.card?.info;
    return (
        <div className="menuCard-container h-[340px] w-56 bg-[#f0f0f0] p-4 m-3 rounded-md shadow-lg hover:bg-slate-500 hover:rounded-md hover:text-white">
            <div className="img-container h-[140px] w-full rounded-md">
                <img className="food-image h-full w-full rounded-md" src={MENU_ITEMS+imageId} alt={name} />
            </div>
            <div className="card-info text-center m-3">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-xs">{description}</p>
                <h4 className="font-semibold">Price: ₹{price/100}</h4>
            </div>
        </div>
    )
}

export default MenuCards;