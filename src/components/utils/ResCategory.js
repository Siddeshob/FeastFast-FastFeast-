import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory=({data})=>{

    const [showItem,setShowItem]=useState(false);

function handleClick()
{
    
    setShowItem(!showItem)
   
}


    return(
        <div>
            {/* accordion header */}
            <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4  ">
                <div className="flex justify-between cursor-pointer duration-2000" onClick={handleClick}>
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