import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs } from 'swiper/modules';
import { addToCart, addToWishlist, getById, getProducts } from '../../entities/reducerc/Products';
import { Link, useParams } from 'react-router';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Card } from '../lazy/lazy';
import Loading from '../../shared/components/loading/loading';

const API = import.meta.env.VITE_API_URL;

const Info = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const products = useSelector((store) => store.products.products)

  const product = useSelector((store) => store.products.infoById);
  let { id } = useParams();
  id = id.slice(1)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getById(id))
  }, [id])

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if (!product || !product.images) {
    return (
      <Loading/>
    );
  }

  return (
    <div className='w-[100%] m-auto mt-[30px]'>
      <h1 className='text-[#808080] w-[90%] m-auto text-[18px]'>
        Account / {product.brand} /<span className='text-[#000]'> {product.productName}</span>
      </h1>

      <div className="w-[90%] m-auto flex flex-col mt-[30px] md:flex-row gap-[30px]">
        {product.images.length === 1 ? (
          <div className="w-[100%] md:w-[50%] bg-[#F5F5F5]">
            <img className='w-[100%]' src={`${API}/images/${product.images[0].images}`} alt="" />
          </div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-[65%] h-[50vh] md:h-[70vh]">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction={isMobile ? "horizontal" : "vertical"}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="mySwiper w-full md:w-[20%] "
            >
              {product.images.map((el) => (
                <SwiperSlide key={`thumb-${el.id}`} className="w-full bg-[#F5F5F5]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${API}/images/${el.images}`}
                    alt={`${<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>}`}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Thumbs, Navigation]}
              className="mySwiper2 w-full h-auto md:h-auto"
            >
              {product.images.map((el) => (
                <SwiperSlide key={el.id} className="w-full h-full bg-[#F5F5F5]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${API}/images/${el.images}`}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        )}

        <div className="flex flex-col w-[100%] md:w-[35%] gap-y-[20px]">
          <p className='text-[24px] font-[500]'>{product.productName}</p>
          <p className='text-[26px] font-[700]'>${product.price}</p>
          <p className='text-[#474747] text-[18px]'>{product.description}</p>
          <hr className=' h-[1px]  bg-[gray]' />
          <p className='text-[24px] font-[500] flex flex-row items-center relative justify-start gap-[20px]'>
            Colours:
            <span
              className="rounded-[50%] absolute w-[25px] left-[100px] top-[10px] h-[25px]"
              style={{ background: product.color, color: product.color }}
            ></span>
          </p>
          <div className='flex flex-row items-center justify-between'>
            <p className='font-[500] text-[24px]'>Size:</p>
            <p className='border-[1px] border-[#808080] font-[500] w-[12%] text-center py-[5px] rounded-[5px]'>XS</p>
            <p className='border-[1px] border-[#808080] font-[500] w-[12%] text-center py-[5px] rounded-[5px]'>S</p>
            <p className='border-[1px] bg-[#DB4444] text-[#fff] font-[500] w-[12%] text-center py-[5px] rounded-[5px]'>M</p>
            <p className='border-[1px] border-[#808080] font-[500] w-[12%] text-center py-[5px] rounded-[5px]'>L</p>
            <p className='border-[1px] border-[#808080] font-[500] w-[12%] text-center py-[5px] rounded-[5px]'>XL</p>
          </div>
          <div className='flex justify-between items-center my-[20px]'>
            <button onClick={()=>dispatch(addToCart(product.id))} className='bg-[#DB4444] text-[#fff] rounded-[5px] py-[5px] text-[24px] w-[83%]'>Buy Now</button>
            <p onClick={()=>dispatch(addToWishlist({...product, image:product.images[0].images}))} className='border-[1px] flex justify-center border-[#808080] w-[15%] py-[10px] rounded-[5px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            </p>
          </div>
          <div className='border-[1px] border-[#808080] rounded-[8px]'>
            <div className='flex items-center p-[20px] border-b-[1px] border-b-[#808080] gap-[10px]'>
              <p className='w-[20%]'>
                <svg className='size-14' viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Delivery-Truck--Streamline-Iconoir" height={16} width={16} ><desc>{"\n    Delivery Truck Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M4.997875 11.5659375c0.6909375 0 1.2510625 -0.5600625 1.2510625 -1.2510625s-0.560125 -1.2510625 -1.2510625 -1.2510625 -1.2510625 0.560125 -1.2510625 1.2510625 0.560125 1.2510625 1.2510625 1.2510625Z" stroke="#000000" strokeMiterlimit={1.5} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} /><path d="M11.2531875 11.5659375c0.6909375 0 1.2510625 -0.5600625 1.2510625 -1.2510625s-0.560125 -1.2510625 -1.2510625 -1.2510625 -1.2510625 0.560125 -1.2510625 1.2510625 0.560125 1.2510625 1.2510625 1.2510625Z" stroke="#000000" strokeMiterlimit={1.5} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} /><path d="M6.280187499999999 10.314874999999999h3.0964375V3.8093749999999997c0 -0.2073125 -0.16806249999999998 -0.37531250000000005 -0.375375 -0.37531250000000005H0.619125" stroke="#000000" strokeLinecap="round" strokeWidth={1} /><path d="M3.527875 10.314874999999999H2.2455c-0.20725 0 -0.37531250000000005 -0.16799999999999998 -0.37531250000000005 -0.37531250000000005v-3.0650625" stroke="#000000" strokeLinecap="round" strokeWidth={1} /><path d="M1.2446875 5.310625h2.502125" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} /><path d="M9.376624999999999 5.310625h3.5092499999999998c0.1483125 0 0.28275 0.08737500000000001 0.34299999999999997 0.222875l1.119625 2.51925c0.021312499999999998 0.047999999999999994 0.032375 0.09993749999999998 0.032375 0.1524375v1.734375c0 0.2073125 -0.16806249999999998 0.37531250000000005 -0.375375 0.37531250000000005h-1.1885" stroke="#000000" strokeLinecap="round" strokeWidth={1} /><path d="M9.376624999999999 10.314874999999999h0.6255" stroke="#000000" strokeLinecap="round" strokeWidth={1} /></svg>
              </p>
              <div>
                <p className='text-[20px] font-[600]'>Free Delivery</p>
                <p className='underline font-[400] text-[16px]'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='flex items-center p-[20px] gap-[10px]'>
              <p className='w-[20%]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
              </p>
              <div>
                <p className='text-[20px] font-[600]'>Free Delivery</p>
                <p className='underline font-[400] text-[16px]'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex my-[30px] gap-[5px] w-[90%] m-auto items-center'>
        <i className='bg-[#DB4444] rounded-[3px] py-[15px] px-[8px]'></i>
        <p className='text-[#DB4444] font-[600] text-[16px]'>Related Item</p>
      </div>
      <div className='pb-[30px] mb-[50px]'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
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
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Info;
