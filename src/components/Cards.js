import {FOOD_URL} from "../Utils/constants";

const Cards = (props)=>{
    const {name,cuisines,avgRating,cloudinaryImageId} = props;
    return (
        <div className="card-container h-[340px] w-56 bg-[#f0f0f0] p-4 m-3 rounded-md shadow-lg hover:bg-slate-500 hover:rounded-md  hover:text-white hover:cursor-pointer">
            <div className="img-container h-36 w-full">
                <img className="food-image h-full w-full rounded-md" src={FOOD_URL+cloudinaryImageId} alt={name} />
            </div>
            <div className="card-info text-center m-3 flex justify-between flex-col">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm">{cuisines?.join(", ")}</p>
                <h5 className="font-semibold">{avgRating} ⭐ rating </h5>
                <h5 className="text-sm">Delivery Time: {props.sla.deliveryTime} mins</h5>
            </div>
        </div>
    )
}

export default Cards;