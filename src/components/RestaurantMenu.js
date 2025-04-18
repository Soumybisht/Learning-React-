import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import MenuCards from "./MenuCards.js";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const {resId} = useParams();
  console.log(resId);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2749106&lng=77.9995722&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER",
      {
        headers: {
          "x-cors-api-key": "temp_269baec7d5b839cb98a43b33340de00c"
        }
      }
    );
    const json = await data.json();
    setMenuInfo(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage
  } = menuInfo?.data?.cards[2]?.card?.card?.info || {};

    const menuItems = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div className="res-info">
      <p style={{fontSize:"50px",fontWeight:"bold"}}>{name}</p>
      <h3>Rating: {avgRating} ⭐</h3>
      <p>{cuisines?.join(", ")}</p>
      <h3>Offer: {costForTwoMessage}</h3>
      <h1>Menu Items</h1>
      {/* <ul className="menuItems">
        {menuItems?.map((item)=>{
          const data = item?.card?.info;
          console.log(data?.name);
          return (<li key={data?.id}>{data?.name} for Price: ₹{data?.price/100}  {data}  </li>)
        })}
      </ul> */}
      <div className="menuCards">
        { menuItems?.map((item)=>{
            return <MenuCards key={item?.card?.info?.id} resData={item} />
          })
        }
      </div>
    </div>
    
  );
};

export default RestaurantMenu;
