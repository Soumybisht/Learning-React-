import { createContext } from "react"

const UserContext = createContext({
    user:{
        name:"Dummy Name Data",
        email:"dummymail@gmail.com",
        age:22,
    }
})

export default UserContext;
