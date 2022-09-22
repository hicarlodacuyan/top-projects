import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { MdClear } from 'react-icons/md';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="h-full overflow-hidden bg-slate-50">
      <div className="flex flex-col p-4 gap-4 max-w-6xl mx-auto h-full">
        <h1 className="md:text-3xl text-2xl font-semibold text-slate-700 text-center">
          My Shopping Cart
        </h1>

        <div className="flex flex-col overflow-auto bg-white rounded-md drop-shadow-lg">
          <div className="grid grid-cols-5 w-full md:p-8 p-2 md:text-base text-xs border-b-[1px] border-slate-200 font-bold">
            <p>Item</p>
            <p>Name</p>
            <p>Quantity</p>
            <p>Remove</p>
            <p>Price</p>
          </div>

          <ul className="flex flex-col overflow-auto">
            {cartItems.map((item) => {
              return (
                <li
                  className="grid items-center grid-cols-5 w-full md:p-8 p-2 md:text-base text-xs gap-4 border-b-[1px] border-slate-100"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-24 object-scale-down"
                  ></img>
                  <p id="truncate" className="text-xs">
                    {item.title}
                  </p>
                  <p>1</p>
                  <span>
                    <MdClear />
                  </span>
                  <p>${item.price}</p>
                </li>
              );
            })}
          </ul>

          {cartItems.length === 0 ? (
            <h1 className="md:text-2xl text-1xl font-semibold text-slate-700 text-center p-4 w-full h-full flex justify-center items-center">
              Your cart is empty
            </h1>
          ) : (
            <div className="grid grid-cols-5 w-full md:p-8 p-2 md:text-base font-bold border-t-[1px] border-slate-200">
              <p></p>
              <p></p>
              <p></p>
              <p className="justify-self-end mr-4 text-lg">Total</p>
              <p className="text-lg">$100</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
