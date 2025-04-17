import {FOOD_URL} from "../Utils/constants";

const Cards = (props)=>{
    const {resData} = props;
    const {name,cuisines,avgRating,cloudinaryImageId} = resData;
    return (
        <div className="card-container">
            <div className="img-container">
                <img className="food-image" src={FOOD_URL+cloudinaryImageId} alt={name} />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <h5>{cuisines?.join(", ")}</h5>
                <h5>{avgRating} star rating </h5>
                <h5>Delivery Time: {resData.sla.deliveryTime} mins</h5>
            </div>
        </div>
    )
}

export default Cards;