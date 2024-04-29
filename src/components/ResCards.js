import {CDN_URL} from  "./utils/constants";


const ResCards = (props) => {
    const { resData } = props;
    //destructure the data
    const { name, cuisines, areaName, avgRating, costForTwo } = resData?.info;
    return (
      <div className="res-Card">
        <img
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt=""
          className="card-img"
        />
        <h3> {name} </h3>
        <h4> {cuisines.join(" , ")} </h4>
        <h4> Address : {areaName} </h4>
        <h4> AvgRating - {avgRating} </h4>
        <h3> {costForTwo.toUpperCase()} </h3>
      </div>
    );
  };
  export default  ResCards;