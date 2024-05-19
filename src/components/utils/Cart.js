import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "./CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatchCart = useDispatch();

  const handleClearCart = () => {
    dispatchCart(clearCart());
  };

  const handleRemoveTopCart = () => {
    dispatchCart(removeItem());
  };



  return (
    <div className="text-center m-4 p-2 ">
      <h1 className="text-2xl font-bold"> Cart</h1>
      <div>
      <button
        className="bg-orange-600 border rounded-lg m-2 p-2 cursor-pointer"
        onClick={handleClearCart}
      >
        
        Clear All 🗑️
      </button>
      <button
        className="bg-orange-600 border rounded-lg m-2 p-2 cursor-pointer"
        onClick={handleRemoveTopCart}>
        remove
      </button>
      </div>
      {cartItems.length == 0 && (
        <h1 className="p-3">
          Cart is empty{" "}
          <div className="flex justify-center p-5">
            {" "}
            <span className="text-9xl">🫗</span>
          </div>{" "}
        </h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
