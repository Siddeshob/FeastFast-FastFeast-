// import { useDispatch } from "react-redux";
// import { CDN_URL } from "./constants";
// import { addItem } from "./CartSlice";

// const ItemList = ({ items }) => {
//     const dispatch=useDispatch();
    
//     const handleAddItem=()=>{
//         //dispatch an action
//         dispatch(addItem(items))    
//     }
//   return (
//         <div>
//             {items.map((item) => (
//                 <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                    
//                     <div>
//                         <div className="py-2" >
//                             <span>{item.card.info.name}</span>
//                             <span> - ₹ {item.card.info.price/100}</span>
                        
//                         </div>
//                         <p className="text-xs" >{item.card.info.description}</p>
//                     </div>
//                     <div className="h-auto p-2">
//                         <div className="absolute  ">
//                             <button className="m-0 p-1 bg-green-600  rounded-xl relative" 
//                             onClick={()=>handleAddItem(items)} >ADD+</button>
//                         </div>
                        
//                         <div className="h-24 w-24">
//                             <img src={CDN_URL+item.card.info.imageId} className=" "/>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ItemList;

import { useDispatch } from "react-redux";
import { CDN_URL } from "./constants";
import { addItem } from "./CartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    
    const handleAddItem = (item) => {
        // Dispatch an action to add the item to the cart
        dispatch(addItem(item));
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                    <div>
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="h-auto p-2">
                        <div className="absolute">
                            {/* Pass the item to handleAddItem */}
                            <button
                                className="m-0 p-1 bg-green-600 rounded-xl relative"
                                onClick={() => handleAddItem(item)}
                            >
                                ADD+
                            </button>
                        </div>
                        <div className="h-24 w-24">
                            <img src={CDN_URL + item.card.info.imageId} className="" alt="Item Image" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
