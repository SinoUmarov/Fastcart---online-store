import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories, getProducts } from '../../entities/reducerc/Products';
import { Link, useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../app/styles/styles.css';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Card, Timer } from '../lazy/lazy';
import Category from '../../shared/components/catergory/category';

const API = import.meta.env.VITE_API_URL

import foto from "../../shared/imgs/Frame 694.png"
import Timer2 from '../../shared/components/timer copy/timer';
import Services6 from "../../shared/imgs/Services (6).png"
import Services7 from "../../shared/imgs/Services (7).png"
import Services8 from "../../shared/imgs/Services (8).png"
import play from "../../shared/imgs/1c360f790c1817d3afa266b3c9f8c81ff0ed4428.png"
import gucci from "../../shared/imgs/652e82cd70aa6522dd785109a455904c (1).png"
import frame from "../../shared/imgs/Frame 707.png"
import ladmoda from "../../shared/imgs/attractive-woman-wearing-hat-posing-black-background 1.png"

const Home = () => {
  const products = useSelector((store) => store.products.products)
  const categories = useSelector((store) => store.products.categories)
  const dispatch = useDispatch()

  let navigate = useNavigate()

  useEffect(() => {
    dispatch(getProducts()),
      dispatch(getCategories())
  }, [])

  return (
    <div>
      <div className='w-[90%] m-auto flex gap-[30px] flex-col'>
        <div className='mt-[30px] flex flex-row w-[100%] md:hidden justify-between items-center p-[10px] border-[1px] rounded-[10px] text-[22px] m-auto md:hidden'>
          <input className='outline-0 w-[89%]' type="search" placeholder='Search' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:w-[90%] m-auto gap-y-[50px] my-[50px]'>
        <div className='flex flex-wrap m-auto w-[90%] md:border-[##E5E5E5] md:border-r-[1px] md:w-[20%] md:gap-[0px] gap-[10px]'>
          {
            categories.map((el, i) => (
              <span onClick={() => navigate("/products")} key={i} className='bg-[#F5F5F5] md:w-[100%] md:py-[5px] md:bg-[#fff] p-[10px] text-[18px] font-[400] rounded-[5px]'>{el.categoryName}</span>
            ))
          }
        </div>
        <div className='w-[100%] md:w-[73%] flex'>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              products.map((el) => (
                <SwiperSlide key={el.id}>
                  <div className='w-[100%] md:flex-row md:h-[55vh] p-[30px] flex flex-col h-[100vh] items-center justify-evenly bg-[#000]'>
                    <div className='text-[#fff] gap-y-[20px] w-[90%] p-[20px] md:w-[50%]'>
                      <h1 className='font-[400] text-[18px]'>{el.productName}</h1>
                      <p className='text-[40px] font-[600]'>Up to 10% off Voucher</p>
                      <Link to={"/products"} className='underline text-[20px] flex items-center gap-[5px]'>Shop Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></Link>
                    </div>
                    <img className='w-[90%] md:w-[40%]' src={`${API}/images/${el.image}`} alt="" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
      <div className='w-[90%] flex flex-col m-auto gap-y-[20px]'>
        <div className='flex gap-[5px] items-center'>
          <i className='bg-[#DB4444] rounded-[3px] py-[15px] px-[8px]'></i>
          <p className='text-[#DB4444] font-[600] text-[16px]'>Today’s</p>
        </div>
        <div className='flex flex-col md:flex-row gap-y-[20px] md:gap-[100px] md:items-center'>
          <h1 className='text-[36px] font-[600]'>Flash Sales</h1>
          <Timer />
          <div className='flex flex-row gap-[10px] md:absolute md:right-[5%]'>
            <div className="custom-prev bg-[#F5F5F5] p-[10px] rounded-[50%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
            </div>
            <div className="custom-next bg-[#F5F5F5] p-[10px] rounded-[50%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>

        </div>
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
        <div className='flex justify-center w-[90%] m-auto border-b-[1px] border-b-[#B3B3B3]  items-center pb-[50px] '>
          <Link to={"/products"} className='rounded-[5px] text-[#fff] bg-[#DB4444] text-[18px] px-[30px] py-[10px]'>View All Products</Link>
        </div>
      </div>
      <div className='w-[90%] flex flex-col m-auto gap-y-[20px]'>
        <div className='flex gap-[5px] items-center'>
          <i className='bg-[#DB4444] rounded-[3px] py-[15px] px-[8px]'></i>
          <p className='text-[#DB4444] font-[600] text-[16px]'>Categories</p>
        </div>
        <div className='flex flex-col md:flex-row gap-y-[20px] md:gap-[100px] md:items-center'>
          <h1 className='text-[32px] md:text-[36px] font-[600]'>Browse By Category</h1>
          <div className='md:flex flex-row gap-[10px] md:absolute hidden md:right-[5%]'>
            <div className="custom-prev bg-[#F5F5F5] p-[10px] rounded-[50%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
            </div>
            <div className="custom-next bg-[#F5F5F5] p-[10px] rounded-[50%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>

        </div>
      </div>
      <div className='pb-[30px] my-[50px]'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={10}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            640: { slidesPerView: 7 },
            1024: { slidesPerView: 7 },
          }}
        >
          {categories.map((el) => (
            <SwiperSlide className='swiperSlide' key={el.id}>
              <Category name={el.categoryName} img={el.categoryImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className='my-[30px] w-[90%] m-auto' />
      <div className='w-[90%] flex flex-col m-auto gap-y-[20px]'>
        <div className='flex gap-[5px] items-center'>
          <i className='bg-[#DB4444] rounded-[3px] py-[15px] px-[8px]'></i>
          <p className='text-[#DB4444] font-[600] text-[16px]'>This Month</p>
        </div>
        <div className='flex flex-col gap-y-[20px] justify-between md:flex-row md:items-center'>
          <h1 className='text-[32px] md:text-[36px] font-[600]'>Best Selling Products</h1>
          <Link to={"/products"} className='bg-[#DB4444] text-[#fff] p-[10px] w-[50%] text-center text-[18px] rounded-[5px] md:w-[15%]'>View All</Link>
        </div>
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
      <div className='w-[100%] md:w-[90%] m-auto md:flex-row md:h-[65vh] p-[10px] md:p-[30px] flex flex-col h-[100vh] items-center justify-evenly bg-[#000]'>
        <div className='text-[#fff] p-0 gap-y-[20px] w-[90%] md:p-[20px] flex flex-col justify-between md:w-[50%]'>
          <h1 className='font-[400] text-[#00FF66] text-[18px]'>Categories</h1>
          <p className='text-[32px] font-[600]'>Enhance Your Music Experience</p>
          <Timer2 />
          <Link to={"/products"} className='bg-[#00FF66] w-[50%] text-[#000] md:w-[35%] p-[10px] rounded-[5px] text-center text-[20px]'>Buy Now!</Link>
        </div>
        <img className='w-[90%] md:w-[50%]' src={foto} alt="" />
      </div>
      <div className='w-[90%] flex my-[30px] mt-[70px] flex-col m-auto gap-y-[20px]'>
        <div className='flex gap-[5px] items-center'>
          <i className='bg-[#DB4444] rounded-[3px] py-[15px] px-[8px]'></i>
          <p className='text-[#DB4444] font-[600] text-[16px]'>Our Products</p>
        </div>
        <div className='flex flex-col gap-y-[20px] justify-between md:flex-row md:items-center'>
          <h1 className='text-[32px] md:text-[36px] font-[600]'>Explore Our Products</h1>
        </div>
      </div>
      <div className='w-[90%] m-auto flex flex-col gap-y-[20px] md:flex-row flex-wrap'>{
        products.slice(0, 8).map((el) => (
          <div className='w-[100%] md:w-[25%]' key={el.id}>
            <Card
              img={`${API}/images/${el.image}`}
              name={el.productName}
              price={el.price}
              hasDiscount={el.hasDiscount}
              discountPrice={el.discountPrice}
              id={el.id}
              elem={el}
            />
          </div>
        ))
      }</div>
      <div className='flex justify-center w-[90%] m-auto border-b-[1px] border-b-[#B3B3B3]  items-center pb-[50px] '>
        <Link to={"/products"} className='rounded-[5px] text-[#fff] bg-[#DB4444] text-[18px] px-[30px] py-[10px]'>View All Products</Link>
      </div>
      <div className='w-[90%] flex my-[30px] mt-[70px] flex-col m-auto gap-y-[20px]'>
        <div className='flex gap-[5px] items-center'>
          <i className='bg-[#DB4444] rounded-[3px] py-[15px] px-[8px]'></i>
          <p className='text-[#DB4444] font-[600] text-[16px]'>Featured</p>
        </div>

        <div className='flex flex-col gap-y-[20px] justify-between md:flex-row md:items-center'>
          <h1 className='text-[32px] md:text-[36px] font-[600]'>New Arrival</h1>
        </div>

        <div className="w-[100%] m-auto flex flex-col gap-y-[30px] md:flex-row justify-between">
          <div className="w-[100%] h-auto p-[30px] md:w-[48%] bg-[#000]">
            <img
              src={play}
              alt="PlayStation 5"
            />
            <div className="text-white">
              <h3 className="text-[22px]">PlayStation 5</h3>
              <p className="text-[18px]">Black and white version of the PS5 coming out on sale.</p>
              <button className="mt-2 px-4 py-2 bg-white text-black">Shop Now</button>
            </div>
          </div>

          <div className='flex flex-col gap-y-[30px] w-[100%] justify-between md:w-[48%]'>

            <div className="bg-[#000] w-[100%] h-[60vh] md:h-[40vh] p-[30px] flex flex-row-reverse justify-between">
              <img
                src={ladmoda}
                alt="Women's Collections"
                className="w-[50%]"
              />
              <div className="text-[white]">
                <h3 className="text-lg font-semibold">Women’s Collections</h3>
                <p className="text-sm">Featured woman collections that <br /> give you another vibe.</p>
                <button className="mt-2 px-4 py-2 text-[black] bg-[#fff]">Shop Now</button>
              </div>
            </div>

            <div className="flex w-[100%] gap-y-[30px] flex-col md:flex-row justify-between">

              <div className="bg-[#000] h-[60vh] md:h-[40vh] w-[100%] relative p-[30px] md:w-[48%]">
                <img
                  src={frame}
                  alt="Speakers"
                  className="w-[80%] absolute bottom-0"
                />
                <div className="text-white absolute z-20 bottom-[30px] left-[30px]">
                  <h3 className="text-lg font-semibold">Speakers</h3>
                  <p className="text-sm">Amazon wireless speakers</p>
                  <button className="mt-2 px-4 py-2 bg-white text-black">Shop Now</button>
                </div>
              </div>


              <div className="bg-[#000] h-[60vh] md:h-[40vh] w-[100%] relative p-[30px] md:w-[48%]">
                <img
                  src={gucci}
                  alt="Perfume"
                  className="w-[80%] absolute bottom-0"
                />
                <div className="text-white absolute z-20 bottom-[30px] left-[30px]">
                  <h3 className="text-lg font-semibold">Perfume</h3>
                  <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                  <button className="mt-2 px-4 py-2 bg-white text-black">Shop Now</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className='flex mb-[20vh] w-[90%] m-auto flex-col md:flex-row gap-y-[20px] justify-between md:items-center'>
        <div className='w-[100%] p-[10px] m-auto flex flex-col gap-y-[10px] items-center md:w-[30%]'>
          <img className='w-[20%]' src={Services6} alt="" />
          <h1 className='font-[600] text-[20px]'>FREE AND FAST DELIVERY</h1>
          <p className='tex-[14px] font-[400]'>Free delivery for all orders over $140</p>
        </div>
        <div className='w-[100%] p-[10px] m-auto flex flex-col gap-y-[10px] items-center md:w-[30%]'>
          <img className='w-[20%]' src={Services7} alt="" />
          <h1 className='font-[600] text-[20px]'>24/7 CUSTOMER SERVICE</h1>
          <p className='tex-[14px] font-[400]'>Friendly 24/7 customer support</p>
        </div>
        <div className='w-[100%] p-[10px] m-auto flex flex-col gap-y-[10px] items-center md:w-[30%]'>
          <img className='w-[20%]' src={Services8} alt="" />
          <h1 className='font-[600] text-[20px]'>MONEY BACK GUARANTEE</h1>
          <p className='tex-[14px] font-[400]'>We reurn money within 30 days</p>
        </div>
      </div>
    </div >
  )
}

export default Home