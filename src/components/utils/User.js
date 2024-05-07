import { useState } from "react";

const User=(props)=>{
    const[count,setCount]=useState(0);
    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount(count+1)}} >click</button>
            <h2>name: {props.name}</h2>
            <h3>Location:Karnataka</h3>
            <h4>Contact:siddeshaob2001@gmail.com</h4>
        </div>
    )
}
export default User;