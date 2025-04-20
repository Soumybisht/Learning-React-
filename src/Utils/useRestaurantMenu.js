import { useEffect,useState } from "react";

const useCards = (resId) => {


  const [menuInfo,setMenuInfo] = useState(null);

  useEffect(()=>{
    fetchMenu();
  },[]);

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

  return menuInfo;
}

export default useCards;
