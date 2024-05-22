import ResCards, { withPromotedLable } from "./ResCards";
import { useState, useEffect } from "react";
import resObjList from "./utils/mockData";
import Shimmer from "./utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState();
  const [filterRestorent, setFilterRestorent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantsCardPromoted = withPromotedLable(ResCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestorent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleFilterClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating < 4
    );
    setListOfRestaurants(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks your offline</h1>;
  }

  if (!listOfRestaurants == null) return <Shimmer />;

  return (
    <div className=" " data-testid="bodyidOne">
      <div className="flex ml-20">
        <div className=" m-4 p-2">
          <input
            type="text"
            className="w-72 mr-4 h-6 bg-zinc-100 border border-gray-400 rounded-lg p-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 w-24 border rounded-lg h-9"
            onClick={() => {
              // filter the card and update UI
              //searchText
              console.log(searchText);
              var filterdeResult = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestorent(filterdeResult);
            }}
          >
            Search
          </button>
        </div>
        <button
        data-testid="ratedIdBtn"
          className=" bg-indigo-300 w-48 mt-6 border rounded-lg h-9"
          onClick={handleFilterClick}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div data-testid='resCardBody' className="flex flex-wrap h-20 justify-center items-center ">
        {filterRestorent.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantsCardPromoted resData={restaurant} />
            ) : (
              <ResCards resData={restaurant} />
            )}
            {/* <ResCards resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
