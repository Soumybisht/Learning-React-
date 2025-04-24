import Cards from "./Cards";
import { useEffect, useState } from "react";
import {SWIGGY_URL} from "../Utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus.js";

const Body = ()=>{

    const [resList,setResList] = useState([]);
    const [resFilteredList,setFilteredResList] = useState([]);
    const [searchText,setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
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
        
            const items = [];
            for (let i = 1; i <= 10; i++) {
            items.push(<div key={i}><Shimmer/></div>);
        }
        return <div className="flex flex-wrap justify-evenly align-middle m-8">{items}</div>;
    }
    
    const searching = ()=>{
        
        const filterRes = resList.filter((res)=>{
            return res.name?.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredResList(filterRes);
    }

    

    if(!onlineStatus) {
        return (
            <h1>Looks like you are Offline!!!</h1>
        );
    }

    return (
        <div className="body-container z-0">
            <div className="search-bar flex justify-center align-middle my-7">
                <input className="inputField h-11 w-72 bg-slate-200 mt-3 rounded-md text-center focus:bg-slate-50" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button data-testid="search-btn" className="search-btn h-11 w-20 m-3 bg-green-300 rounded-md hover:text-white hover:bg-green-600" onClick={searching} >Search</button>
                <button className="btn h-11 w-28 m-3 bg-blue-300 text-sm rounded-md hover:text-white hover:bg-blue-600" onClick={
                    ()=>{
                        const filtered = resList.filter((x)=>{
                            return x?.avgRating > 4.5;
                        });
                        
                        setFilteredResList(filtered);
                    }
                }>Top Rated restaurents</button>
            </div>
            <div className="res-cards flex flex-wrap">
                {/* <Cards name="KFC" cuisines="Burger, Pizza, Chicken" avgRating="4.6"/>
                <Cards name="Maharaja Bhog" cuisines="Indian, Italian, Chinese" avgRating="4.1"/>
                <Cards name="Burger King" cuisines="Veg-Burger, Non-Veg Burger" avgRating="4.2"/>
                <Cards name="Dominos" cuisines="Garlic Bread, Pizza, ChocoLavaCake" avgRating="4.7"/>
                <Cards name="Pizza Hut" cuisines="Burger, Pizza, Coca-Cola" avgRating="4.0"/> */}
                {resFilteredList.map((data)=>(
                    <Link to={"/restaurants/"+data.id} key={data.id}><Cards {...data}/></Link>
                ))} 
            </div> 

        </div>
    );
}

export default Body;