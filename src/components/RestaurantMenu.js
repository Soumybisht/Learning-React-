import Shimmer from "./Shimmer.js";
import MenuCards from "./MenuCards.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu.js"
import useOnlineStatus from "../Utils/useOnlineStatus";


const RestaurantMenu = () => {

  const {resId} = useParams();
  console.log(resId);
  
  const menuInfo = useRestaurantMenu(resId); //fetching the data by calling API(custom hook)
  
  const onlineStatus = useOnlineStatus();

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage
  } = menuInfo?.data?.cards[2]?.card?.card?.info || {};

    const menuItems = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    if(!onlineStatus) {
      return (
          <h1>Looks like you are Offline!!!</h1>
      );
  }

  if(menuInfo===null){
    const items = [];
                for (let i = 1; i <= 10; i++) {
                items.push(<div key={i}><Shimmer/></div>);
            }
            return <div className="flex flex-wrap justify-evenly align-middle m-8">{items}</div>;
  }

  return (
    <div className="res-info text-center">
      <p className="font-serif text-gray-600" style={{fontSize:"50px",fontWeight:"bold"}}>{name}</p>
      <h3 className="font-semibold text-2xl mb-1">Rating: {avgRating} ⭐</h3>
      <p>{cuisines?.join(", ")}</p>
      <h3>Offer: {costForTwoMessage}</h3>
      <h1 className="text-4xl font-bold mt-4 text-slate-700">Menu Items</h1>
      {/* <ul className="menuItems">
        {menuItems?.map((item)=>{
          const data = item?.card?.info;
          console.log(data?.name);
          return (<li key={data?.id}>{data?.name} for Price: ₹{data?.price/100}  {data}  </li>)
        })}
      </ul> */}
      <div className="menuCards flex flex-wrap m-3 justify-items-start">
        { menuItems?.map((item)=>{
            return <MenuCards key={item?.card?.info?.id} resData={item} />
          })
        }
      </div>
    </div>
    
  );
};

export default RestaurantMenu;
