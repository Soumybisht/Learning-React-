import Cards from "./Cards";
import {resData} from "../Utils/mockdata";
import { useState } from "react";



const Body = ()=>{

    const [resList,setResList] = useState(resData);
    return (
        <div className="body-container">
            <div className="search-bar">
                <h2>Search</h2>
                <button className="btn" onClick={
                    ()=>{
                        const filtered = resData.filter((x)=>{
                            return x.resRating > 4.5;
                        });
                        console.log(filtered);
                        setResList(filtered);
                    }
                }>Top Rated restaurents</button>
            </div>
            <div className="res-cards">
                {/* <Cards resName="KFC" foodName="Burger, Pizza, Chicken" resRating="4.6"/>
                <Cards resName="Maharaja Bhog" foodName="Indian, Italian, Chinese" resRating="4.1"/>
                <Cards resName="Burger King" foodName="Veg-Burger, Non-Veg Burger" resRating="4.2"/>
                <Cards resName="Dominos" foodName="Garlic Bread, Pizza, ChocoLavaCake" resRating="4.7"/>
                <Cards resName="Pizza Hut" foodName="Burger, Pizza, Coca-Cola" resRating="4.0"/> */}
                {resList.map((data)=>(
                    <Cards key={data.id} resData={data}/>
                ))} 
            </div> 

        </div>
    );
}

export default Body;