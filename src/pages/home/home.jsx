import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories, getProducts } from '../../entities/reducerc/Products'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import video1 from "../../shared/imgs/интернетмагазин.mp4"
import video2 from "../../shared/imgs/интернет магазин 11.mp4"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import '../../app/styles/styles.css'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Card } from '../lazy/lazy'
import Category from '../../shared/components/catergory/category'

const API = import.meta.env.VITE_API_URL

import foto from '../../shared/imgs/Frame 694.png'
import Services6 from '../../shared/imgs/Services (6).png'
import Services7 from '../../shared/imgs/Services (7).png'
import Services8 from '../../shared/imgs/Services (8).png'
import play from '../../shared/imgs/1c360f790c1817d3afa266b3c9f8c81ff0ed4428.png'
import gucci from '../../shared/imgs/652e82cd70aa6522dd785109a455904c (1).png'
import frame from '../../shared/imgs/Frame 707.png'
import ladmoda from '../../shared/imgs/attractive-woman-wearing-hat-posing-black-background 1.png'
import CountdownTimer from '../../CountdownTimer/CountdownTimer'
import Chat from '../../Chat'


const Home = () => {
  const products = useSelector(store => store.products.products)
  const categories = useSelector(store => store.products.categories)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [dispatch])


  const videos = [
    { src: video1, title: "new collection", desc: "new trand uhuuuu!!!!!" },
    { src: video2, title: "new app", desc: "sales 50%" },
  ]

  return (
    <div className="bg-gray-50">
    
      <div className='w-[90%] m-auto flex gap-[30px] flex-col'>
        <div className='mt-[30px] flex flex-row w-[100%] md:hidden justify-between items-center p-[10px] border-[1px] rounded-[10px] text-[22px] m-auto bg-white shadow-sm'>
          <input
            className='outline-0 w-[89%] bg-transparent'
            type='search'
            placeholder='Search...'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-7 text-gray-500'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </div>
      </div>

    
      <div className='flex flex-col md:flex-row md:w-[90%] m-auto gap-y-[50px] my-[50px]'>
 
        <div className='flex flex-wrap m-auto w-[90%] md:border-r md:border-gray-200 md:w-[20%] md:gap-[0px] gap-[10px]'>
          {categories.map((el, i) => (
            <span
              key={el.id ?? i}
              onClick={() => navigate('/products')}
              className='
                bg-gray-100 
                md:w-[100%] 
                md:py-[10px] 
                md:bg-transparent 
                p-[12px] 
                text-[16px] 
                font-medium 
                rounded-lg 
                cursor-pointer
              
                hover:text-black
                transition-all
                duration-300
                flex items-center
                group
              '
            >
              <span className='group-hover:translate-x-1 transition-transform duration-300'>
                {el.categoryName}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          ))}
        </div>

        <div className='w-[100%] md:w-[73%] flex'>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper rounded-xl overflow-hidden shadow-lg"
          >
           
            {videos.map((video, index) => (
              <SwiperSlide key={`video-${index}`}>
                <div className="relative h-[55vh] w-full">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={video.src}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center pl-12">
                    <div className="text-white max-w-md">
                      <h2 className="text-4xl font-bold mb-4">{video.title}</h2>
                      <p className="text-xl mb-6">{video.desc}</p>
                      <Link
                        to={'/products'}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-flex items-center transition-colors duration-300"
                      >
                       watch now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Продуктовые слайды */}
            {products.map(el => (
              <SwiperSlide key={el.id}>
                <div className='w-full h-[55vh] p-[30px] flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-r from-green-800 to-green-600 rounded-xl'>
                  <div className='text-white gap-y-[20px] w-[90%] p-[20px] md:w-[50%]'>
                    <h1 className='font-medium text-xl'>{el.productName}</h1>
                    <p className='text-4xl font-bold'>
                      Up to 10% off Voucher
                    </p>
                    <Link
                      to={'/products'}
                      className='text-xl flex items-center gap-[5px] group mt-6'
                    >
                      <span className="underline">Shop Now</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='size-5 group-hover:translate-x-1 transition-transform'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                        />
                      </svg>
                    </Link>
                  </div>
                  <img
                    className='w-[90%] md:w-[40%] object-contain h-[70%] hover:scale-105 transition-transform duration-500'
                    src={`${API}/images/${el.image}`}
                    alt=''
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Flash Sales */}
      <div className='w-[90%] flex flex-col m-auto gap-y-6 mb-12'>
        <div className='flex items-center'>
          <div className='bg-red-600 rounded w-4 h-8 mr-2'></div>
          <p className='text-red-600 font-semibold'>Today's</p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-center'>
          <h1 className='text-3xl md:text-4xl font-bold'>Flash Sales</h1>
          <CountdownTimer targetDate='2025-07-31T23:59:59' />
          <div className='flex gap-3 md:ml-auto'>
            <button className='custom-prev bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                />
              </svg>
            </button>
            <button className='custom-next bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Продукты Flash Sales */}
      <div className='pb-12 mb-16'>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="px-4"
        >
          {products.map(el => (
            <SwiperSlide key={el.id} className="pb-10">
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
        <div className='flex justify-center w-[90%] m-auto border-b border-gray-300 pb-12'>
          <Link
            to={'/products'}
            className='rounded-md text-white bg-red-600 hover:bg-red-700 px-8 py-3 text-lg font-medium transition-colors shadow-md'
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Категории */}
      <div className='w-[90%] flex flex-col m-auto gap-y-6 mb-12'>
        <div className='flex items-center'>
          <div className='bg-red-600 rounded w-4 h-8 mr-2'></div>
          <p className='text-red-600 font-semibold'>Categories</p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-center'>
          <h1 className='text-3xl md:text-4xl font-bold'>Browse By Category</h1>
          <div className='flex gap-3 md:ml-auto'>
            <button className='category-prev bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                />
              </svg>
            </button>
            <button className='category-next bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Swiper категорий */}
      <div className='pb-12 my-12'>
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={15}
          navigation={{
            prevEl: '.category-prev',
            nextEl: '.category-next',
          }}
          breakpoints={{
            480: { slidesPerView: 3 },
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          className="px-4"
        >
          {categories.map(el => (
            <SwiperSlide key={el.id}>
              <div className='cursor-pointer group transition-all duration-300 hover:bg-red-500 hover:text-white rounded-lg p-4 text-center border border-gray-200 hover:border-transparent hover:shadow-lg'>
                <div className='bg-gray-100 group-hover:bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-colors'>
                  <img 
                    src={`${API}/images/${el.categoryImage}`} 
                    alt={el.categoryName} 
                    className='w-10 h-10 object-contain'
                  />
                </div>
                <h3 className='font-medium group-hover:text-white'>{el.categoryName}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <hr className='my-[30px] w-[90%] m-auto' />

      {/* Best Selling Products */}
      <div className='w-[90%] flex flex-col m-auto gap-y-6 mb-12'>
        <div className='flex items-center'>
          <div className='bg-red-600 rounded w-4 h-8 mr-2'></div>
          <p className='text-red-600 font-semibold'>This Month</p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
          <h1 className='text-3xl md:text-4xl font-bold'>Best Selling Products</h1>
          <Link
            to={'/products'}
            className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-lg font-medium transition-colors'
          >
            View All
          </Link>
        </div>
      </div>

      <div className='pb-12 mb-16'>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="px-4"
        >
          {products.map(el => (
            <SwiperSlide key={el.id} className="pb-10">
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

      {/* Black Promo Block */}
      <div className='w-full md:w-[90%] m-auto md:flex-row md:h-[65vh] p-6 md:p-12 flex flex-col items-center justify-evenly bg-black rounded-xl mb-16'>
        <div className='text-white gap-y-6 w-full md:w-[50%]'>
          <h1 className='font-medium text-green-400 text-xl'>Categories</h1>
          <p className='text-3xl md:text-4xl font-bold'>
            Enhance Your Music Experience
          </p>
          <CountdownTimer targetDate='2025-07-21T23:59:59' />
          <Link
            to={'/products'}
            className='bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-md inline-block text-lg font-medium transition-colors mt-6'
          >
            Buy Now!
          </Link>
        </div>
        <img className='w-full md:w-[50%] mt-6 md:mt-0' src={foto} alt='Music Experience' />
      </div>

      {/* Our Products */}
      <div className='w-[90%] flex flex-col m-auto gap-y-6 mb-12'>
        <div className='flex items-center'>
          <div className='bg-red-600 rounded w-4 h-8 mr-2'></div>
          <p className='text-red-600 font-semibold'>Our Products</p>
        </div>
        <h1 className='text-3xl md:text-4xl font-bold'>Explore Our Products</h1>
      </div>

      <div className='w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
        {products.slice(0, 8).map(el => (
          <div key={el.id}>
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
        ))}
      </div>

      <div className='flex justify-center w-[90%] m-auto border-b border-gray-300 pb-16'>
        <Link
          to={'/products'}
          className='rounded-md text-white bg-red-600 hover:bg-red-700 px-8 py-3 text-lg font-medium transition-colors shadow-md'
        >
          View All Products
        </Link>
      </div>

      {/* Featured New Arrival */}
      <div className='w-[90%] flex flex-col m-auto gap-y-6 mb-12'>
        <div className='flex items-center'>
          <div className='bg-red-600 rounded w-4 h-8 mr-2'></div>
          <p className='text-red-600 font-semibold'>Featured</p>
        </div>
        <h1 className='text-3xl md:text-4xl font-bold'>New Arrival</h1>
      </div>

      {/* Видео-блок */}
      <div className='w-[90%] m-auto mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {videos.map((video, index) => (
            <div key={`video-block-${index}`} className="relative rounded-xl overflow-hidden shadow-lg group">
              <video
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                autoPlay
                muted
                loop
                playsInline
                src={video.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
                  <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    watch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      <div className='w-[90%] m-auto flex flex-col gap-y-8 md:flex-row justify-between mb-16'>
        <div className='w-full md:w-[48%] bg-black p-8 rounded-xl'>
          <img src={play} alt='PlayStation 5' className='mb-6' />
          <div className='text-white'>
            <h3 className='text-2xl font-bold mb-3'>PlayStation 5</h3>
            <p className='text-lg mb-4'>
              Black and white version of the PS5 coming out on sale.
            </p>
            <button className='bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-md font-medium transition-colors'>
              Shop Now
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-y-8 w-full md:w-[48%]'>
          <div className='bg-black w-full p-8 rounded-xl flex flex-col md:flex-row justify-between items-center'>
            <div className='text-white md:w-[50%] mb-6 md:mb-0'>
              <h3 className='text-xl font-bold mb-2'>Women's Collections</h3>
              <p className='text-gray-300 mb-4'>
                Featured woman collections that give you another vibe.
              </p>
              <button className='bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-md font-medium transition-colors'>
                Shop Now
              </button>
            </div>
            <img
              src={ladmoda}
              alt="Women's Collections"
              className='w-full md:w-[40%]'
            />
          </div>

          <div className='flex flex-col md:flex-row gap-y-8 md:gap-x-8'>
            <div className='bg-black p-8 rounded-xl relative h-64 w-full'>
              <img
                src={frame}
                alt='Speakers'
                className='absolute bottom-0 right-0 w-3/4'
              />
              <div className='text-white absolute z-20'>
                <h3 className='text-xl font-bold mb-1'>Speakers</h3>
                <p className='text-gray-300 mb-4'>Amazon wireless speakers</p>
                <button className='bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-md font-medium transition-colors'>
                  Shop Now
                </button>
              </div>
            </div>

            <div className='bg-black p-8 rounded-xl relative h-64 w-full'>
              <img
                src={gucci}
                alt='Perfume'
                className='absolute bottom-0 right-0 w-3/4'
              />
              <div className='text-white absolute z-20'>
                <h3 className='text-xl font-bold mb-1'>Perfume</h3>
                <p className='text-gray-300 mb-4'>GUCCI INTENSE OUD EDP</p>
                <button className='bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-md font-medium transition-colors'>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Сервисы */}
      <div className='flex mb-20 w-[90%] m-auto flex-col md:flex-row gap-8 justify-between'>
        {[
          {
            icon: Services6,
            title: "FREE AND FAST DELIVERY",
            desc: "Free delivery for all orders over $140"
          },
          {
            icon: Services7,
            title: "24/7 CUSTOMER SERVICE",
            desc: "Friendly 24/7 customer support"
          },
          {
            icon: Services8,
            title: "MONEY BACK GUARANTEE",
            desc: "We return money within 30 days"
          }
        ].map((service, index) => (
          <div key={index} className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center'>
            <img className='w-16 h-16 mb-4' src={service.icon} alt='' />
            <h3 className='font-bold text-lg mb-2'>{service.title}</h3>
            <p className='text-gray-600'>{service.desc}</p>
          </div>
        ))}
      </div>

      <Chat />
    </div>
  )
}

export default Home