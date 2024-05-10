import { useEffect, useState } from "react";

const useRestaurantMenu=(resId)=>{

    const[resInfo,setResInfo]=useState(null)

    //fetch data
    useEffect(()=>{
        fetchData();
    },[])

    fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json=await data.json();
        setResInfo(json.data);
    }


    return resInfo;
}
export default useRestaurantMenu;