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

const API = import.meta.env.VITE_API_URL;
const APIImg = import.meta.env.VITE_API_Img;

const Info = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  const product = useSelector((store) => store.products.infoById);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-[100%] m-auto mt-[30px]'>
      <h1 className='text-[#808080] w-[90%] m-auto text-[18px]'>
        Account / {product?.brand} /<span className='text-[#000]'> {product?.productName}</span>
      </h1>

      <div className="w-[90%] m-auto flex flex-col mt-[30px] md:flex-row gap-[30px]">
        {product?.images?.length === 1 ? (
          <div className="w-[100%] md:w-[50%] bg-[#F5F5F5]">
            <img className='w-[100%]' src={`${APIImg}images/${product.images[0]}`} alt="" />
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
              className="mySwiper w-full md:w-[20%]"
            >
              {product?.images?.map((el) => (
                <SwiperSlide key={`thumb-${el.id}`} className="w-full bg-[#F5F5F5]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${APIImg}/images/${el.images}`}
                    alt=""
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
              {product?.images?.map((el) => (
                <SwiperSlide key={el.id} className="w-full h-full bg-[#F5F5F5]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${APIImg}/images/${el.images}`}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className="flex flex-col w-[100%] md:w-[35%] gap-y-[20px]">
          <p className='text-[24px] font-[500]'>{product?.productName}</p>
          <p className='text-[26px] font-[700]'>${product?.price}</p>
          <p className='text-[#474747] text-[18px]'>{product?.description}</p>
          <hr className=' h-[1px] bg-[gray]' />
          <p className='text-[24px] font-[500] flex items-center gap-[20px]'>
            Colours:
            <span
              className="rounded-[50%] w-[25px] h-[25px]"
              style={{ background: product?.color }}
            ></span>
          </p>

          <div className='flex flex-wrap items-center gap-2'>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <p key={size} className={`border-[1px] font-[500] w-[12%] text-center py-[5px] rounded-[5px] ${size === 'M' ? 'bg-[#DB4444] text-white' : 'border-[#808080]'}`}>{size}</p>
            ))}
          </div>

          <div className='flex justify-between items-center my-[20px]'>
            <button
              onClick={() => dispatch(addToCart(product?.id))}
              className='bg-[#DB4444] text-[#fff] rounded-[5px] py-[5px] text-[24px] w-[83%]'
            >
              Buy Now
            </button>
            <p
              onClick={() =>
                dispatch(addToWishlist({ ...product, image: product?.images?.[0]?.images }))
              }
              className='border-[1px] flex justify-center border-[#808080] w-[15%] py-[10px] rounded-[5px]'
            >
              ❤️
            </p>
          </div>

          <div className='border-[1px] border-[#808080] rounded-[8px]'>
            <div className='flex items-center p-[20px] border-b-[1px] border-b-[#808080] gap-[10px]'>
              <p className='w-[20%]'>🚚</p>
              <div>
                <p className='text-[20px] font-[600]'>Free Delivery</p>
                <p className='underline font-[400] text-[16px]'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='flex items-center p-[20px] gap-[10px]'>
              <p className='w-[20%]'>🔄</p>
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
          {products?.map((el) => (
            <SwiperSlide className='swiperSlide' key={el.id}>
              <Card
                img={`${APIImg}images/${el.image}`}
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
