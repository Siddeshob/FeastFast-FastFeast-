import ResCards from "./ResCards";
import { useState, useEffect } from "react";
import resObjList from "./utils/mockData";
import Shimmer from "./utils/Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObjList);

  useEffect(() => {
    console.log("is useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[3]);
    //setListOfRestaurants(json?.data?.cards[5]?.card?.card?.info);
  };

  if (listOfRestaurants === 0) {
    return <Shimmer />;
  }
  const handleFilterClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating < 4
    );
    setListOfRestaurants(filteredList);
    console.log(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
