import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./constants";
import useRestaurantMenu from "./useRestaurantMenu";
import ResCategory from "./ResCategory";


const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

   const {resId}=useParams();

  // is our custome Hook
  const resInfo=useRestaurantMenu(resId)
  const[showIndex,setshowIndex]=useState(0)

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // fetchMenu = async () => {
  //   var data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
  //   var json = await data.json();

  //   console.log(json);
  //   console.log(json?.data?.cards[2]?.card?.card?.info.name);
  //   setResInfo(json.data);
  // };


  if (resInfo == null) return <Shimmer />;

  //resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.info.name


  const{name,areaName,cuisines,totalRatingsString}=resInfo?.cards[2]?.card?.card?.info
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  console.log(itemCards)
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  
  const cetegories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>e.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
  //console.log(cetegories);

  return (
    <div className="text-center">
      <h1 className="font-bold mt-10 mb-2 space-x-1 text-2xl " >{name}</h1>
      <h3>{[areaName,cuisines,totalRatingsString].join(",")}</h3>
      <h2 className="font-bold mt-1 mb-2 text-xl" >Menu</h2>
      <ul className="space-x-6" >
        {itemCards.map(item=><li key={item.card.info.id} >{item.card.info.name} - {item.card.info.price/100} Rs</li>)}
        {/* <li>{itemCards[0].item}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li> */}
      </ul>

      {/* create Accordions */}
      {cetegories.map((cetegory,index)=>(<ResCategory key={cetegory?.card?.info?.name}
       data={cetegory?.card?.card} 
       showItem={index==showIndex?true:false} 
       setshowIndex={()=>setshowIndex(index)}
       
       />))}
    </div>
  );
};

export default RestaurantMenu;
