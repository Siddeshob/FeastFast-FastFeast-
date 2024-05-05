import { useRouteError } from "react-router-dom";
import React from "react";

const Error=()=>{

    const err=useRouteError();
    console.log(err)

    return(
        <div>
            <h1>Error Page is opended</h1>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    )
}
export default Error;