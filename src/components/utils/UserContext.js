import { createContext } from "react";


const UserContext =createContext({
    loggedInUser: "default login",
});
export default UserContext;