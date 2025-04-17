import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2749106&lng=77.9995722&restaurantId=716370&catalog_qa=undefined&submitAction=ENTER",
      {
        headers: {
          "x-cors-api-key": "temp_269baec7d5b839cb98a43b33340de00c"
        }
      }
    );
    const json = await data.json();
    setMenuInfo(json);
    console.log(json);
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

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating} ⭐</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
