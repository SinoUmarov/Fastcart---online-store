import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card2 from '../../shared/components/card2/card2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../app/styles/styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Card } from '../lazy/lazy';
import { getProducts } from '../../entities/reducerc/Products';
import { Link } from 'react-router';

const API = import.meta.env.VITE_API_URL;

const Wishlist = () => {
  const data = useSelector((store) => store.products.wishlist);
  const products = useSelector((store) => store.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="bg-white min-h-screen pt-[40px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto mb-[40px] gap-[20px]">
        <p className="text-[22px] font-semibold text-[#111]">
          Wishlist ({data.length})
        </p>
        <button className="transition-all duration-300 hover:bg-[#db4444] hover:text-white p-[12px] w-full md:w-[200px] border border-black text-[16px] font-medium rounded-[5px]">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Cards */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap gap-[20px]">
        {data?.map((el) => (
          <div key={el.id} className="w-full md:w-[calc(25%-15px)]">
            <Card2 elem={el} />
          </div>
        ))}
      </div>

      {/* Just For You Header */}
      <div className="flex justify-between items-center w-[90%] mx-auto my-[50px]">
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#DB4444] h-[16px] w-[4px] rounded-sm" />
          <p className="text-[#DB4444] text-[18px] font-semibold">Just For You</p>
        </div>
        <Link
          to="/products"
          className="transition-all duration-300 text-center text-[16px] font-medium border border-gray-400 px-[20px] py-[10px] rounded-[5px] hover:bg-gray-100"
        >
          See All
        </Link>
      </div>

      {/* Swiper with Recommendations */}
      <div className="w-[90%] mx-auto mb-[60px]">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products?.map((el) => (
            <SwiperSlide key={el.id}>
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
  );
};

export default Wishlist;
