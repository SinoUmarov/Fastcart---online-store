import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearProductCart, delProductCart, getAddproduct, increaseProductCart, reduceProductCart } from '../../entities/reducerc/Products'
import { Link } from 'react-router';

const API = import.meta.env.VITE_API_URL;


const Cart = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAddproduct())
  }, [])

  let productsCart = useSelector((store) => store.products.productsCart)
  let totalProducts = useSelector((store) => store.products.totalProducts)
  let totalPrice = useSelector((store) => store.products.totalPrice)
  console.log(productsCart);
  

  return (
    <div>
      <p className='text-[#808080] my-[30px] w-[90%] m-auto text-[18px]'>Home / <span className='text-[#000]'>Cart</span></p>
      <table className='w-[90%] hidden md:block m-auto mb-[30px]'>
        <thead>
          <tr>
            <th className='p-[15px] text-[#666666] text-[18px] font-[400] w-[35%] text-start'>Product</th>
            <th className='p-[15px] text-[#666666] text-[18px] font-[400] w-[20%] text-center'>Price</th>
            <th className='p-[15px] text-[#666666] text-[18px] font-[400] w-[20%] text-center'>Quantity</th>
            <th className='p-[15px] text-[#666666] text-[18px] font-[400] w-[13%] text-start'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {
            productsCart.map((el) => (
              <tr className='rounded-[5px]' style={{ boxShadow: "1px 1px 5px 5px #f3f2f5" }} key={el.id}>
                <td className='flex p-[10px] h-[10vh] gap-[20px] items-center'>
                  <img className='w-[13%]' src={`${API}/images/${el.product.image}`} alt="" />
                  <h1 className='text-[18px] font-[400]'>{el.product.productName}</h1>
                </td>
                <td className='text-center h-[10vh] p-[10px]'>
                  <p className='text-[18px] font-[400]'>${el.product.price}</p>
                </td>
                <td className='h-[8vh] p-[10px]'>
                  <div className='text-center p-[5px] border-[1px] m-auto border-[#999999] w-[30%] rounded-[5px] flex flex-row gap-[5px] items-center justify-center'>
                    <p className='text-[18px] font-[400]'>{el.quantity}</p>
                    <div className='flex flex-col gap-y-[5px]'>
                      <p onClick={() => dispatch(increaseProductCart(el.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
                      </p>
                      <p onClick={() => dispatch(reduceProductCart(el.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </p>
                    </div>
                  </div>
                </td>
                <td className='h-[10vh] p-[10px]'>
                  <div className='flex px-[10px] items-center justify-between'>
                    <p className='font-[600] text-[18px]'>${el.product.price*el.quantity}</p>
                    <button onClick={()=>dispatch(delProductCart(el.id))}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#DB4444] font-[900]"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='md:hidden w-[90%] gap-y-[20px] mb-[30px] m-auto flex flex-col'>
        {
          productsCart.map((el) => (
            <div key={el.id} className='flex justify-between h-[28vh] p-[20px] rounded-[5px]' style={{ boxShadow: "1px 1px 3px 3px #ccc" }}>
              <div className='50%'>
                <img className='w-[40%]' src={`${API}/images/${el.product.image}`} alt="" />
                <h1 className='text-[18px] font-[400]'>{el.product.productName}</h1>
                <p className='text-[18px] font-[400]'>${el.product.price}</p>
              </div>
              <div className='w-[40%] flex flex-col justify-center items-center'>
                <div className='text-center p-[5px] border-[1px] m-auto border-[#999999] w-[50%] rounded-[5px] flex flex-row gap-[5px] items-center justify-center'>
                  <p className='text-[18px] font-[400]'>{el.quantity}</p>
                  <div className='flex flex-col gap-y-[5px]'>
                    <p onClick={() => dispatch(increaseProductCart(el.id))}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
                    </p>
                    <p onClick={() => dispatch(reduceProductCart(el.id))}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                    </p>
                  </div>
                </div>
                <div className='flex px-[10px] items-center justify-between'>
                  <p className='font-[600] text-[18px]'>${el.product.price*el.quantity}</p>
                  <button onClick={()=>dispatch(delProductCart(el.id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#DB4444] font-[900]"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex flex-row justify-between items-center w-[90%] m-auto'>
        <Link to={"/products"} className='text-center border-[1px] text-[18px] font-[500] border-[#AFAFAF] rounded-[5px] w-[60%] md:w-[20%] py-[10px]'>Return To Shop</Link>
        <div className='md:w-[35%] w-[15%] flex flex-row justify-between'>
          <button className='block md:hidden'><svg className='w-[25px] h-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#000000" id="Arrow-Counter-Clockwise-Bold--Streamline-Phosphor" height={16} width={16} ><desc>{"\n    Arrow Counter Clockwise Bold Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M15.84 8.00151875c0.00035625 3.97149375 -3.19084375 7.2060375 -7.1619875 7.25925625h-0.097275c-1.8532375 0.00390625 -3.63691875 -0.70545625 -4.9813 -1.98105 -0.48756875 -0.46046875 -0.29383125 -1.27606875 0.34873125 -1.46808125 0.2982125 -0.0891125 0.6213125 -0.0123625 0.84759375 0.2013375 3.08818125 2.915525 8.17444375 1.39466875 9.15526875 -2.7375375C14.93185625 5.1432375 11.071625 1.49883125 7.00261875 2.71551875c-0.8764625 0.26206875 -1.674 0.737975 -2.320825 1.384875 -0.0094375 0.00943125 -0.01815 0.01814375 -0.0283125 0.02685625L3.27349375 5.38818125h1.2420625c0.67058125 0.00056875 1.08908125 0.72685 0.75329375 1.30730625 -0.15556875 0.2689375 -0.44260625 0.43465625 -0.75329375 0.43491875H1.0311125c-0.48110625 0 -0.8711125 -0.3900125 -0.8711125 -0.8711125V2.77485c0.00056875 -0.67058125 0.72685 -1.08908125 1.30730625 -0.75329375 0.26893125 0.15556875 0.43465 0.44260625 0.4349125 0.75329375v1.50411875l1.55929375 -1.42716875c3.9620625 -3.9407875 10.70438125 -2.11471875 12.13616875 3.286925 0.1611125 0.6078125 0.2425625 1.2339875 0.24231875 1.86279375Z" strokeWidth={0.0625} /></svg></button>
          <button onClick={()=>dispatch(clearProductCart())} className='block md:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 md:hidden text-[#DB4444]"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
          <button className='text-center hidden md:block border-[1px] text-[18px] font-[500] border-[#AFAFAF] rounded-[5px] w-[48%] py-[10px]'>Update Cart</button>
          <button onClick={()=>dispatch(clearProductCart())} className='text-center hidden md:block border-[1px] text-[18px] font-[500] text-[#DB4444] border-[#DB4444] rounded-[5px] w-[48%] py-[10px]'>Remove all</button>
        </div>
      </div>
      <div className='w-[90%] mt-[50px] m-auto flex gap-y-[40px] flex-col md:flex-row items-start md:justify-between'>
        <div className='flex flex-row justify-between w-[100%] md:w-[40%]'>
          <input className='p-[10px] w-[70%] border-[1px] border-[#000] rounded-[5px] text-[18px]' type="text" placeholder='Coupon Code' />
          <button className='text-center border-[1px] text-[18px] font-[500] text-[#DB4444] border-[#DB4444] rounded-[5px] w-[26%] py-[10px]'>Apply</button>
        </div>
        <div className='w-[100%] md:w-[35%] mb-[30px] gap-y-[20px] flex flex-col p-[25px] border-[1px] border-[#000] rounded-[5px]'>
          <p className='font-[600] text-[20px]'>Cart Total</p>
          <div className='flex flex-row justify-between'>
            <p>Subtotal:</p>
            <p>${totalPrice}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='flex flex-row justify-between'>
            <p className='text-[20px] font-[600]'>Total:</p>
            <p className='text-[20px] font-[600]'>${totalPrice}</p>
          </div>
          <Link to={"/checkout"} className='w-[70%] text-center m-auto p-[10px] bg-[#DB4444] text-[#fff] rounded-[5px]'>Procees to checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart