import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearProductCart, delProductCart, getAddproduct, increaseProductCart, reduceProductCart } from '../../entities/reducerc/Products'
import { Link } from 'react-router';

const API = import.meta.env.VITE_API_URL;

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddproduct());
  }, [dispatch]);

  const productsCart = useSelector(store => store.products.productsCart);
  const totalPrice = useSelector(store => store.products.totalPrice);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <p className="text-gray-500 mb-8 text-lg">
        Home / <span className="text-gray-900 font-semibold">Cart</span>
      </p>

      {/* Table for desktop */}
      <table className="w-full hidden md:table border-collapse shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-4 px-6 text-left text-gray-600 font-medium">Product</th>
            <th className="py-4 px-6 text-center text-gray-600 font-medium">Price</th>
            <th className="py-4 px-6 text-center text-gray-600 font-medium">Quantity</th>
            <th className="py-4 px-6 text-right text-gray-600 font-medium">Subtotal</th>
            <th className="py-4 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {productsCart?.map(el => (
            <tr key={el.id} className="bg-white hover:bg-gray-50 transition-shadow border-b last:border-b-0">
              <td className="flex items-center gap-4 py-4 px-6">
                <img
                  src={`${API}/images/${el.product.image}`}
                  alt={el.product.productName}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <span className="text-gray-800 font-semibold">{el.product.productName}</span>
              </td>
              <td className="text-center text-gray-700 font-medium">${el.product.price.toFixed(2)}</td>
              <td className="text-center">
                <div className="inline-flex items-center border rounded-md overflow-hidden select-none">
                  <button
                    onClick={() => dispatch(reduceProductCart(el.id))}
                    className="px-3 py-1 hover:bg-gray-200 transition"
                    aria-label="Reduce quantity"
                  >
                    −
                  </button>
                  <span className="px-4 text-gray-900 font-medium">{el.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseProductCart(el.id))}
                    className="px-3 py-1 hover:bg-gray-200 transition"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-right text-gray-900 font-semibold">${(el.product.price * el.quantity).toFixed(2)}</td>
              <td className="text-center">
                <button
                  onClick={() => dispatch(delProductCart(el.id))}
                  className="text-red-600 hover:text-red-800 transition"
                  aria-label="Delete product"
                >
                  &#10005;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="md:hidden space-y-6">
        {productsCart.map(el => (
          <div
            key={el.id}
            className="flex flex-col bg-white rounded-lg shadow p-4 space-y-3"
          >
            <div className="flex items-center gap-4">
              <img
                src={`${API}/images/${el.product.image}`}
                alt={el.product.productName}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{el.product.productName}</h3>
                <p className="text-gray-700">${el.product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => dispatch(delProductCart(el.id))}
                className="text-red-600 hover:text-red-800 text-xl font-bold"
                aria-label="Delete product"
              >
                &#10005;
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center border rounded-md overflow-hidden select-none">
                <button
                  onClick={() => dispatch(reduceProductCart(el.id))}
                  className="px-3 py-1 hover:bg-gray-200 transition"
                  aria-label="Reduce quantity"
                >
                  −
                </button>
                <span className="px-4 text-gray-900 font-medium">{el.quantity}</span>
                <button
                  onClick={() => dispatch(increaseProductCart(el.id))}
                  className="px-3 py-1 hover:bg-gray-200 transition"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <p className="font-semibold text-gray-900">${(el.product.price * el.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Actions and totals */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
        <Link
          to="/products"
          className="px-6 py-3 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100 transition w-full md:w-auto text-center"
        >
          Return To Shop
        </Link>

        <div className="flex gap-4 w-full md:w-auto">
          <button
            onClick={() => dispatch(clearProductCart())}
            className="px-6 py-3 border border-red-500 text-red-600 rounded-md hover:bg-red-50 transition w-full md:w-auto"
          >
            Remove All
          </button>
        </div>
      </div>

      <div className="max-w-md mt-10 p-6 border border-gray-300 rounded-lg mx-auto md:mx-0">
        <h2 className="text-2xl font-semibold mb-4">Cart Total</h2>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-4">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <hr className="mb-4" />
        <div className="flex justify-between text-lg font-semibold text-gray-900 mb-6">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="block text-center bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart;
