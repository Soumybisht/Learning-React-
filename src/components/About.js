import { useState } from "react";
import Users from "./Users";
import useOnlineStatus from "../Utils/useOnlineStatus.js";


const About = () => {

  const onlineStatus = useOnlineStatus();
  const data = {
    
    name:"Soumy Bisht",
    age:21,
    address:"Danpur, Rudrapur"
  }

  if(!onlineStatus) {
    return (
        <h1>Looks like you are Offline!!!</h1>
    );
}

  
  return (
    <div>
        <h1>Food Delivering App</h1>
        <Users aboutData = {data} />
    </div>
  )
}

export default About;
