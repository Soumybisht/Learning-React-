import {MENU_ITEMS} from "../Utils/constants";

const MenuCards = (props)=>{
    const {resData} = props;
    const {name,price,imageId,description} = resData?.card?.info;
    return (
        <div className="menuCard-container">
            <div className="img-container">
                <img className="food-image" src={MENU_ITEMS+imageId} alt={name} />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Price: ₹{price/100}</h4>
            </div>
        </div>
    )
}

export default MenuCards;