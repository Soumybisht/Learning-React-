import Cards from "./Cards";
import { useEffect, useState } from "react";
import {SWIGGY_URL} from "../Utils/constants.js";
import Shimmer from "./Shimmer.js";
import { resData } from "../Utils/mockdata.js";


const Body = ()=>{

    const [resList,setResList] = useState([]);
    const [resFilteredList,setFilteredResList] = useState([]);
    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(SWIGGY_URL,{
            headers:{
                'x-cors-api-key': 'temp_269baec7d5b839cb98a43b33340de00c'
            }
        });
        const json = await data.json(); //converting raw data into json
        console.log(json);
        const resCards = json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;
        //const resCards = resData.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;
        const restaurantList = resCards
        .map(card => card.card?.card?.info)
        .filter(info => info);
        setResList(restaurantList);
        setFilteredResList(restaurantList);
        //setResList(json); // assigning new data to variable
    }

    if(resList.length===0){
        return <Shimmer/>;
    }
    
    const searching = ()=>{
        
        const filterRes = resList.filter((res)=>{
            return res.name?.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredResList(filterRes);
    }
    return (
        <div className="body-container">
            <div className="search-bar">
                <input className="inputField" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={searching} >Search</button>
                <button className="btn" onClick={
                    ()=>{
                        const filtered = resList.filter((x)=>{
                            return x?.avgRating > 4.5;
                        });
                        
                        setFilteredResList(filtered);
                    }
                }>Top Rated restaurents</button>
            </div>
            <div className="res-cards">
                {/* <Cards name="KFC" cuisines="Burger, Pizza, Chicken" avgRating="4.6"/>
                <Cards name="Maharaja Bhog" cuisines="Indian, Italian, Chinese" avgRating="4.1"/>
                <Cards name="Burger King" cuisines="Veg-Burger, Non-Veg Burger" avgRating="4.2"/>
                <Cards name="Dominos" cuisines="Garlic Bread, Pizza, ChocoLavaCake" avgRating="4.7"/>
                <Cards name="Pizza Hut" cuisines="Burger, Pizza, Coca-Cola" avgRating="4.0"/> */}
                {resFilteredList.map((data)=>(
                    <Cards key={data.id} resData={data}/>
                ))} 
            </div> 

        </div>
    );
}

export default Body;