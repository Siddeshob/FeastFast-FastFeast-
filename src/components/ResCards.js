import { CDN_URL } from "./utils/constants";

const ResCards = (props) => {
  const { resData } = props;
  // console.log(resData)
  //destructure the data
  const { name, cuisines, areaName, avgRating, costForTwo } = resData?.info;
  return (
    <div className="flex justify-center items-center bg-gray-300 m-3 p-3 border rounded-2xl  h-[557px] w-[350px] hover:scale-105 transition-transform ">
      <div className=" text-center ">
        <img
          className=" border border rounded-2xl  "
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt=""
        />
        <h3 className="text-xl font-bold "> {name} </h3>
        <h4 className="font-medium"> {cuisines.join(" , ")} </h4>
        <h4 className="font-medium"> Address : {areaName} </h4>
        <h4 className="font-medium"> AvgRating - {avgRating} </h4>
        <h3 className="font-semibold text-lg"> {costForTwo.toUpperCase()} </h3>
      </div>
    </div>
  );
};

//higher order Component
// i/p-ResCards ==>>ResCardsPromoted

export const withPromotedLable=(ResCards)=>{
  
  return (props)=>{
    return(
      <div>
        <label className="absolute m-6 px-4 bg-slate-800 text-amber-300 rounded-md" >isOpen</label>
        <ResCards {...props}/>
      </div>
    )
  }

}



export default ResCards;
