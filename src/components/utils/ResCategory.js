import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory=({data,showItem,setshowIndex})=>{

const handelClick=()=>{
    setshowIndex();
}


    return(
        <div>
            {/* accordion header */}
            <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4  ">
                <div className="flex justify-between cursor-pointer duration-2000" onClick={handelClick}>
                    <span className=" font-bold" >{data.title} ({data.title.length})</span>
                    <span>🔽</span>
                </div>
                {showItem && <ItemList items={data.itemCards}/>}
            </div>
            {/* accordion body */}
            
        </div>
    )
}

export default ResCategory;