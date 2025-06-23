import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card2 from '../../shared/components/card2/card2'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../app/styles/styles.css';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Card } from '../lazy/lazy';
import { getProducts } from '../../entities/reducerc/Products';
import { Link } from 'react-router';

const API = import.meta.env.VITE_API_URL

const Wishlist = () => {
  let data = useSelector((store) => store.products.wishlist)
  const products = useSelector((store) => store.products.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div>
      <div className='flex w-[90%] m-auto my-[30px] items-center justify-between'>
        <p className='text-[18px] font-[600]'>Wishlist ({data.length})</p>
        <button className='p-[10px] w-[50%] md:w-[15%] border-[#000] text-[18px] font-[500] border-[1px] rounded-[5px]'>Move All To Bag</button>
      </div>
      <div className='w-[90%] m-auto flex-wrap flex flex-col gap-y-[20px] md:flex-row md:justify-start'>
        {
          data.map((el) => (
            <div key={el.id} className='w-[100%] md:w-[25%]'>
              <Card2 elem={el} />
            </div>
          ))
        }
      </div>
      <div className='flex justify-between w-[90%] m-auto items-center my-[20px]'>
        <div className='flex gap-[5px] items-center'>
          <i className='bg-[#DB4444] rounded-[3px] py-[15px] px-[8px]'></i>
          <p className='text-[#DB4444] font-[600] text-[16px]'>Just For You</p>
        </div>
        <Link to={"/products"} className='p-[10px] text-center w-[30%] md:w-[10%] border-[#808080] text-[18px] font-[500] border-[1px] rounded-[5px]'>See All</Link>
      </div>
      <div className='pb-[30px] mb-[50px]'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((el) => (
            <SwiperSlide className='swiperSlide' key={el.id}>
              <Card
                img={`${API}/images/${el.image}`}
                name={el.productName}
                price={el.price}
                hasDiscount={el.hasDiscount}
                discountPrice={el.discountPrice}
                id={el.id}
                elem={el}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Wishlist