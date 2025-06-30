import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs, Navigation, Pagination } from 'swiper/modules';
import { addToCart, addToWishlist, getById, getProducts } from '../../entities/reducerc/Products';
import { useParams } from 'react-router';
import { Card } from '../lazy/lazy';
import Loading from '../../shared/components/loading/loading';

const API = import.meta.env.VITE_API_URL;

const Info = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedSize, setSelectedSize] = useState("M");

  const products = useSelector((store) => store.products.products);
  const product = useSelector((store) => store.products.infoById);

  let { id } = useParams();
  id = id?.startsWith(":") ? id.slice(1) : id;

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(getById(id));
  }, [id]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (!product || !product.images) {
    return <Loading />;
  }

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className='w-full m-auto mt-8'>
      <h1 className='text-gray-500 w-[90%] m-auto text-lg'>
        Account / {product.brand} / <span className='text-black'> {product.productName}</span>
      </h1>

      <div className="w-[90%] m-auto flex flex-col mt-8 md:flex-row gap-8">
        {product.images.length === 1 ? (
          <div className="w-full md:w-1/2 bg-gray-100">
            <img className='w-full' src={`${API}/images/${product.images[0].images}`} alt={product.productName} />
          </div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-[65%] h-[50vh] md:h-[70vh]">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction={isMobile ? "horizontal" : "vertical"}
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="mySwiper w-full md:w-[20%]"
            >
              {product.images.map((el) => (
                <SwiperSlide key={`thumb-${el.id}`} className="bg-gray-100">
                  <img
                    className="w-full h-full object-cover"
                    src={`${API}/images/${el.images}`}
                    alt="thumb"
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
                <SwiperSlide key={el.id} className="bg-gray-100">
                  <img
                    className="w-full h-full object-cover"
                    src={`${API}/images/${el.images}`}
                    alt={product.productName}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className="flex flex-col w-full md:w-[35%] gap-6 p-5 rounded-md shadow-md bg-white">
          <p className='text-2xl font-semibold'>{product.productName}</p>
          <p className='text-3xl font-bold'>${product.price}</p>
          <p className='text-gray-700 text-lg'>{product.description}</p>

          <hr className='h-px bg-gray-300' />

          <p className='text-2xl font-medium flex items-center gap-4'>
            Colours:
            <span
              className="rounded-full w-6 h-6 border"
              style={{ backgroundColor: product.color }}
            ></span>
          </p>

          <div className='flex flex-wrap gap-2'>
            <p className='font-medium text-xl w-full'>Size:</p>
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-lg px-4 py-2 rounded border transition 
                  ${selectedSize === size ? 'bg-[#DB4444] text-white border-[#DB4444]' : 'border-gray-500 text-black'}`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className='flex justify-between items-center mt-4'>
            <button
              onClick={() => {
                dispatch(addToCart(product.id));
                alert("Товар добавлен в корзину");
              }}
              className='bg-[#DB4444] hover:bg-[#c23b3b] transition text-white rounded-md py-2 text-xl w-[83%]'
            >
              Buy Now
            </button>
            <button
              onClick={() => {
                dispatch(addToWishlist({
                  ...product,
                  image: product.images[0]?.images,
                }));
                alert("Товар добавлен в избранное");
              }}
              className='border border-gray-500 hover:border-[#DB4444] text-[#DB4444] w-[15%] py-2 rounded-md flex justify-center items-center'
              title="Add to Wishlist"
            >
              ❤️
            </button>
          </div>

          <div className='border border-gray-300 rounded-md'>
            <div className='flex items-center p-4 border-b border-gray-300 gap-4'>
              <svg className='size-10' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className='text-lg font-semibold'>Free Delivery</p>
                <p className='underline text-sm'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='flex items-center p-4 gap-4'>
              <svg className='size-10' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className='text-lg font-semibold'>Return Delivery</p>
                <p className='underline text-sm'>Free 30 Days Delivery Returns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex my-8 gap-2 w-[90%] m-auto items-center'>
        <i className='bg-[#DB4444] rounded-sm py-4 px-2'></i>
        <p className='text-[#DB4444] font-semibold text-base'>Related Items</p>
      </div>

      <div className='pb-12 mb-12'>
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
            <SwiperSlide key={el.id}>
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
