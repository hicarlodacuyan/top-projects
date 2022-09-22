import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl p-4">
        <ul className="grid gap-4 lg:grid-cols-6 md:grid-cols-5 grid-cols-2">
          {cartItems.length === 0
            ? ''
            : cartItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex flex-col bg-white rounded-md drop-shadow"
                  >
                    <div className="flex flex-col justify-between p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-24 object-scale-down"
                      ></img>
                      <p className="text-center font-bold">${item.price}</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-4 p-2 bg-slate-100">
                      <h2 id="truncate" className="flex-1 text-xs text-center">
                        {item.title}
                      </h2>
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
