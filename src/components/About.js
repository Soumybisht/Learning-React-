import { useState } from "react";
import Users from "./Users";

const About = () => {

  const data = {
    
    name:"Soumy Bisht",
    age:21,
    address:"Danpur, Rudrapur"
  }

  return (
    <div>
        <h1>Food Delivering App</h1>
        <Users aboutData = {data} />
    </div>
  )
}

export default About;
