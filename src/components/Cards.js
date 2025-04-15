import {FOOD_URL} from "../Utils/constants";

const Cards = (props)=>{
    const {resData} = props;
    const {resName,foodName,resRating} = resData;
    return (
        <div className="card-container">
            <div className="img-container">
                <img className="food-image" src={""+FOOD_URL} alt="" />
            </div>
            <div className="card-info">
                <h3>{resName}</h3>
                <h5>{foodName}</h5>
                <h5>{resRating} star rating </h5>
                <h5>Free Delivery</h5>
            </div>
        </div>
    )
}

export default Cards;