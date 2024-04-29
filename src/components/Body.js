import ResCards from "./ResCards";
import { useState } from "react";
import resObjList from "./utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObjList);

  const handleFilterClick = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.name === "Wendy's");
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
