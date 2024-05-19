import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart=()=>{

    const cartItems = useSelector((store) => {
        console.log(store);  // Log the entire store to see its structure
        return store.Cart ? store.Cart.items : [];  // Provide a default value
      });
// const cartItems=useSelector((store)=>{store.Cart.items})
// console.log(cartItems);


    return(
        <div className="text-center m-4 p-2">
            <h1 className="text-2xl font-bold" > Cart</h1>  
            <div>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;