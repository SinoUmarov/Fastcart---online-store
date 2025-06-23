import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearProductCart, closeModal, getAddproduct } from '../../entities/reducerc/Products';

const API = import.meta.env.VITE_API_URL;

const Checkout = () => {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAddproduct())
    }, [])
    let productsCart = useSelector((store) => store.products.productsCart)
    let checkout = useSelector((store) => store.products.checkout)
    let totalPrice = useSelector((store) => store.products.totalPrice)
    return (
        <div className='my-[30px]'>
            {
                checkout && (
                    <div className='fixed border-[1px] w-[70%] md:w-[30%] left-[15%] md:left-[35%] rounded-[5px] p-[20px] bg-[#fff]'>
                        <p className='text-[22px]'>Checkout was {checkout}</p>
                        <button className='text-[18px] rounded-[5px] border-[1px] w-[100%] mt-[30px]' onClick={()=>dispatch(closeModal())}>Close</button>
                    </div>
                )
            }
            <p className='text-[#808080] my-[30px] w-[90%] m-auto text-[18px]'>Product / View Cart / <span className='text-[#000]'> CheckOut</span></p>
            <div className='w-[90%] m-auto flex flex-col md:flex-row md:justify-between items-start'>
                <div className='flex  flex-col gap-y-[10px] w-[100%] md:w-[40%]'>
                    <h1 className='font-[500] text-[28px]'>Billing Details</h1>
                    <div style={{ boxShadow: "1px 1px 5px 2px #EBEBEB" }} className='flex rounded-[5px] p-[15px] flex-col gap-y-[20px]'>
                        <input className='border-[1px] p-[10px] rounded-[5px] text-[18px] border-[#C4C4C4]' type="text" placeholder='First name' />
                        <input className='border-[1px] p-[10px] rounded-[5px] text-[18px] border-[#C4C4C4]' type="text" placeholder='Last name' />
                        <input className='border-[1px] p-[10px] rounded-[5px] text-[18px] border-[#C4C4C4]' type="text" placeholder='Street address' />
                        <input className='border-[1px] p-[10px] rounded-[5px] text-[18px] border-[#C4C4C4]' type="text" placeholder='Apartment, floor, etc. (optional)' />
                        <input className='border-[1px] p-[10px] rounded-[5px] text-[18px] border-[#C4C4C4]' type="text" placeholder='Town/City' />
                        <input className='border-[1px] p-[10px] rounded-[5px] text-[18px] border-[#C4C4C4]' type="text" placeholder='Phone number' />
                        <input className='border-[1px] p-[10px] rounded-[5px] text-[18px] border-[#C4C4C4]' type="text" placeholder='Email address' />
                    </div>
                </div>
                <div className='flex flex-col gap-y-[10px] w-[100%] md:w-[40%]'>
                    <div className='flex flex-col gap-y-[10px] w-[100%]'>
                        {
                            productsCart.map((el) => (
                                <div key={el.id} className='flex justify-between items-center p-[10px] rounded-[5px]'>
                                    <div className='w-[65%] flex items-center gap-[5px] flex-row'>
                                        <img className='w-[35%] md:w-[20%]' src={`${API}/images/${el.product.image}`} alt="" />
                                        <h1 className='text-[18px] font-[400]'>{el.product.productName}</h1>
                                    </div>
                                    <p>${el.product.price * el.quantity}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex mt-[30px] flex-col gap-y-[10px] w-[100%]'>
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
                    </div>
                    <div>
                        <div className="flex flex-row gap-x-[10px] items-center mb-2">
                            <input type="radio" id="bank" name="paymentMethod" value="bank" />
                            <label htmlFor="bank" className="text-[18px] font-[600]">Bank</label>
                        </div>
                        <div className="flex flex-row gap-x-[10px] items-center">
                            <input type="radio" id="cod" name="paymentMethod" value="cash" />
                            <label htmlFor="cod" className="text-[18px] font-[600]">Cash on delivery</label>
                        </div>
                    </div>
                    <div className='flex p-[10px] flex-row justify-between w-[100%] my-[20px]' style={{ boxShadow: "1px 1px 5px 2px #EBEBEB" }}>
                        <input className='p-[10px] w-[70%] border-[1px] border-[#D0D0D0] rounded-[5px] text-[18px]' type="text" placeholder='Coupon Code' />
                        <button className='text-center border-[1px] text-[18px] font-[500] text-[#DB4444] border-[#DB4444] rounded-[5px] w-[26%] py-[10px]'>Apply</button>
                    </div>
                    <button onClick={()=>dispatch(clearProductCart())} className='w-[50%] md:w-[30%] text-center my-[10px] text-[18px] p-[10px] bg-[#DB4444] text-[#fff] rounded-[5px]'>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout