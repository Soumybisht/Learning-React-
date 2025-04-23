import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Users = () => {
    const {user,setUser} = useContext(UserContext);
  return (
    <div className="aboutUsInfo">
      <span className="mr-2">Write here to modify the context data on the fly</span>
      <input className="bg-slate-400 border border-black text-center" type="text" value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
      <span className="m-2">Write here to modify the context data on footer</span>
      <input className="bg-slate-400 border border-black text-center" type="text" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
      <h2>Name: {user.name} </h2>
      <h3>Age: {user.age} </h3>
      <h3>Email: {user.email} </h3>
    </div>
  )
}

export default Users;
