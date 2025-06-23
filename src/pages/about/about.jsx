import React from 'react'

import Services6 from "../../shared/imgs/Services (6).png"
import Services7 from "../../shared/imgs/Services (7).png"
import Services8 from "../../shared/imgs/Services (8).png"
import foto from "../../shared/imgs/Side Image (1).png"
import Services1 from "../../shared/imgs/Services (1).png"
import Services2 from "../../shared/imgs/Services (2).png"
import Services from "../../shared/imgs/Services.png"
import img1 from "../../shared/imgs/image 46.png"
import img2 from "../../shared/imgs/Frame 875.png"
import img3 from "../../shared/imgs/Frame 876.png"

const About = () => {
  return (
    <div>
      <div>
        <p className='text-[#8d8d8d] text-[20px] w-[90%] m-auto py-[30px]'>Home / <samp className='text-[#000]'>About</samp></p>
      </div>
      <div className='flex flex-col gap-y-[30px] md:items-center md:w-[90%] m-auto md:flex-row '>
        <div className='w-[90%] md:w-[48%] m-auto'>
          <h1 className='text-[32px] font-[600]'>Our Story</h1>
          <p className='font-[500] text-[20px] py-[30px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br /> Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <img className='w-[100%] border-[1px] md:w-[45%]' src={foto} alt="Photo" />
      </div>

      <div className='flex mb-[20vh] w-[90%] m-auto flex-col mt-[120px] md:flex-row gap-y-[20px] justify-between md:items-center'>
        <div className='w-[100%] p-[10px] m-auto flex flex-col gap-y-[10px] py-[20px] rounded-[5px] border-[1px] items-center md:w-[24%]'>
          <img className='w-[20%]' src={Services6} alt="" />
          <h1 className='font-[700] text-[28px]'>10.5k </h1>
          <p className='tex-[14px] font-[400]'>Sallers active our site</p>
        </div>
        <div className='w-[100%] bg-[#DB4444] text-[#fff] py-[20px] rounded-[5px] p-[10px] m-auto flex flex-col gap-y-[10px] items-center md:w-[24%]'>
          <img className='w-[20%]' src={Services} alt="" />
          <h1 className='font-[700] text-[28px]'>33k</h1>
          <p className='tex-[14px] font-[400]'>Mopnthly Produduct Sale</p>
        </div>
        <div className='w-[100%] p-[10px] m-auto flex flex-col gap-y-[10px] py-[20px] rounded-[5px] border-[1px] items-center md:w-[24%]'>
          <img className='w-[20%]' src={Services1} alt="" />
          <h1 className='font-[700] text-[28px]'>45.5k</h1>
          <p className='tex-[14px] font-[400]'>Customer active in our site</p>
        </div>
        <div className='w-[100%] p-[10px] m-auto flex flex-col gap-y-[10px] py-[20px] rounded-[5px] border-[1px] items-center md:w-[24%]'>
          <img className='w-[20%]' src={Services2} alt="" />
          <h1 className='font-[700] text-[28px]'>25k</h1>
          <p className='tex-[14px] font-[400]'>Anual gross sale in our site</p>
        </div>
      </div>

      <div className='flex flex-col w-[90%] m-auto md:flex-row justify-between '>
        <div className='w-[90%] md:w-[30%] flex flex-col gap-y-[10px]'>
          <img className='w-[73.5%] rounded-[5px] bg-[#F5F5F5] pt-[20px] px-[20px]' src={img1} alt="" />
          <h1 className='text-[32px] font-[500]'>Tom Cruise</h1>
          <p className='font-[400]'>Founder & Chairman</p>
          <div className='flex flex-row justify-start gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" id="Twitter--Streamline-Lucide" height={24} width={24} ><desc>{"\n    Twitter Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M22 4s-0.7 2.1 -2 3.4c1.6 10 -9.4 17.3 -18 11.6 2.2 0.1 4.4 -0.6 6 -2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4 -0.9 -4.2 4 -6.6 7 -3.8 1.1 0 3 -1.2 3 -1.2z" strokeWidth={2} /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" id="Instagram--Streamline-Lucide" height={24} width={24} ><desc>{"\n    Instagram Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M7 2h10s5 0 5 5v10s0 5 -5 5H7s-5 0 -5 -5V7s0 -5 5 -5" strokeWidth={2} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth={2} /><path d="m17.5 6.5 0.01 0" strokeWidth={2} /></svg>
            <svg className='w-[23px] h-[23px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Linkedin--Streamline-Core" height={14} width={14} ><desc>{"\n    Linkedin Streamline Icon: https://streamlinehq.com\n  "}</desc><g id="linkedin--network-linkedin-professional"><path id="Vector" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M3.57363 1.76698c0.00269 0.34578 -0.13077 0.67873 -0.37155 0.92692 -0.24077 0.24818 -0.56953 0.39167 -0.91523 0.39946 -0.34498 -0.01266 -0.67191 -0.15736 -0.91324 -0.40422 -0.24132 -0.24685 -0.378592 -0.57697 -0.383437 -0.92216 0.014997 -0.3363 0.157307 -0.65433 0.398097 -0.889597 0.24078 -0.23527 0.56202 -0.37018 0.89858 -0.377383 0.33559 0.007337 0.65569 0.142582 0.89487 0.378085 0.23918 0.235505 0.37938 0.553475 0.39191 0.888895ZM1.12875 5.44916c0 -0.76217 0.48502 -0.64339 1.1581 -0.64339 0.67309 0 1.14821 -0.11878 1.14821 0.64339v7.42374c0 0.7721 -0.48502 0.6137 -1.14821 0.6137 -0.66318 0 -1.1581 0.1584 -1.1581 -0.6137V5.44916Z" strokeWidth={1} /><path id="Vector_2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M5.43451 5.44927c0 -0.42563 0.15837 -0.584 0.40583 -0.63349 0.24746 -0.0495 1.09871 0 1.39566 0 0.29695 0 0.41573 0.48501 0.40583 0.85125 0.25401 -0.3409 0.59125 -0.61092 0.97946 -0.78423 0.3882 -0.17331 0.81438 -0.2441 1.23777 -0.2056 0.41574 -0.02542 0.83224 0.03692 1.22234 0.18295 0.39 0.14603 0.7451 0.3725 1.0419 0.66469 0.2969 0.29219 0.5289 0.64356 0.6811 1.03129s0.2211 0.80314 0.2023 1.21924v5.06793c0 0.7721 -0.4751 0.6137 -1.1482 0.6137s-1.1482 0.1584 -1.1482 -0.6137V8.88399c0.0174 -0.20378 -0.0092 -0.40891 -0.0781 -0.60147 -0.0689 -0.19256 -0.1785 -0.36804 -0.3212 -0.51452s-0.31529 -0.26053 -0.506 -0.33441c-0.1907 -0.07387 -0.39507 -0.10585 -0.59923 -0.09374 -0.20321 -0.00516 -0.4052 0.0329 -0.5926 0.11167 -0.18739 0.07876 -0.35592 0.19644 -0.49442 0.34523 -0.13849 0.1488 -0.24381 0.32531 -0.30896 0.51786 -0.06515 0.19255 -0.08866 0.39675 -0.06897 0.59907V12.873c0 0.7721 -0.48502 0.6137 -1.15811 0.6137 -0.67308 0 -1.1482 0.1584 -1.1482 -0.6137V5.44927Z" strokeWidth={1} /></g></svg>
          </div>
        </div>
        <div className='w-[90%] md:w-[30%] flex flex-col gap-y-[10px]'>
          <img className='w-[100%] rounded-[5px] bg-[#F5F5F5] pt-[20px] px-[20px]' src={img2} alt="" />
          <h1 className='text-[32px] font-[500]'>Emma Watson</h1>
          <p className='font-[400]'>Managing Director</p>
          <div className='flex flex-row justify-start gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" id="Twitter--Streamline-Lucide" height={24} width={24} ><desc>{"\n    Twitter Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M22 4s-0.7 2.1 -2 3.4c1.6 10 -9.4 17.3 -18 11.6 2.2 0.1 4.4 -0.6 6 -2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4 -0.9 -4.2 4 -6.6 7 -3.8 1.1 0 3 -1.2 3 -1.2z" strokeWidth={2} /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" id="Instagram--Streamline-Lucide" height={24} width={24} ><desc>{"\n    Instagram Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M7 2h10s5 0 5 5v10s0 5 -5 5H7s-5 0 -5 -5V7s0 -5 5 -5" strokeWidth={2} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth={2} /><path d="m17.5 6.5 0.01 0" strokeWidth={2} /></svg>
            <svg className='w-[23px] h-[23px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Linkedin--Streamline-Core" height={14} width={14} ><desc>{"\n    Linkedin Streamline Icon: https://streamlinehq.com\n  "}</desc><g id="linkedin--network-linkedin-professional"><path id="Vector" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M3.57363 1.76698c0.00269 0.34578 -0.13077 0.67873 -0.37155 0.92692 -0.24077 0.24818 -0.56953 0.39167 -0.91523 0.39946 -0.34498 -0.01266 -0.67191 -0.15736 -0.91324 -0.40422 -0.24132 -0.24685 -0.378592 -0.57697 -0.383437 -0.92216 0.014997 -0.3363 0.157307 -0.65433 0.398097 -0.889597 0.24078 -0.23527 0.56202 -0.37018 0.89858 -0.377383 0.33559 0.007337 0.65569 0.142582 0.89487 0.378085 0.23918 0.235505 0.37938 0.553475 0.39191 0.888895ZM1.12875 5.44916c0 -0.76217 0.48502 -0.64339 1.1581 -0.64339 0.67309 0 1.14821 -0.11878 1.14821 0.64339v7.42374c0 0.7721 -0.48502 0.6137 -1.14821 0.6137 -0.66318 0 -1.1581 0.1584 -1.1581 -0.6137V5.44916Z" strokeWidth={1} /><path id="Vector_2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M5.43451 5.44927c0 -0.42563 0.15837 -0.584 0.40583 -0.63349 0.24746 -0.0495 1.09871 0 1.39566 0 0.29695 0 0.41573 0.48501 0.40583 0.85125 0.25401 -0.3409 0.59125 -0.61092 0.97946 -0.78423 0.3882 -0.17331 0.81438 -0.2441 1.23777 -0.2056 0.41574 -0.02542 0.83224 0.03692 1.22234 0.18295 0.39 0.14603 0.7451 0.3725 1.0419 0.66469 0.2969 0.29219 0.5289 0.64356 0.6811 1.03129s0.2211 0.80314 0.2023 1.21924v5.06793c0 0.7721 -0.4751 0.6137 -1.1482 0.6137s-1.1482 0.1584 -1.1482 -0.6137V8.88399c0.0174 -0.20378 -0.0092 -0.40891 -0.0781 -0.60147 -0.0689 -0.19256 -0.1785 -0.36804 -0.3212 -0.51452s-0.31529 -0.26053 -0.506 -0.33441c-0.1907 -0.07387 -0.39507 -0.10585 -0.59923 -0.09374 -0.20321 -0.00516 -0.4052 0.0329 -0.5926 0.11167 -0.18739 0.07876 -0.35592 0.19644 -0.49442 0.34523 -0.13849 0.1488 -0.24381 0.32531 -0.30896 0.51786 -0.06515 0.19255 -0.08866 0.39675 -0.06897 0.59907V12.873c0 0.7721 -0.48502 0.6137 -1.15811 0.6137 -0.67308 0 -1.1482 0.1584 -1.1482 -0.6137V5.44927Z" strokeWidth={1} /></g></svg>
          </div>
        </div>
        <div className='w-[90%] md:w-[30%] flex flex-col gap-y-[10px]'>
          <img className='w-[100%] rounded-[5px] bg-[#F5F5F5] pt-[20px] px-[20px]' src={img3} alt="" />
          <h1 className='text-[32px] font-[500]'>Will Smith</h1>
          <p className='font-[400]'>Product Designer</p>
          <div className='flex flex-row justify-start gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" id="Twitter--Streamline-Lucide" height={24} width={24} ><desc>{"\n    Twitter Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M22 4s-0.7 2.1 -2 3.4c1.6 10 -9.4 17.3 -18 11.6 2.2 0.1 4.4 -0.6 6 -2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4 -0.9 -4.2 4 -6.6 7 -3.8 1.1 0 3 -1.2 3 -1.2z" strokeWidth={2} /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" id="Instagram--Streamline-Lucide" height={24} width={24} ><desc>{"\n    Instagram Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M7 2h10s5 0 5 5v10s0 5 -5 5H7s-5 0 -5 -5V7s0 -5 5 -5" strokeWidth={2} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth={2} /><path d="m17.5 6.5 0.01 0" strokeWidth={2} /></svg>
            <svg className='w-[23px] h-[23px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Linkedin--Streamline-Core" height={14} width={14} ><desc>{"\n    Linkedin Streamline Icon: https://streamlinehq.com\n  "}</desc><g id="linkedin--network-linkedin-professional"><path id="Vector" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M3.57363 1.76698c0.00269 0.34578 -0.13077 0.67873 -0.37155 0.92692 -0.24077 0.24818 -0.56953 0.39167 -0.91523 0.39946 -0.34498 -0.01266 -0.67191 -0.15736 -0.91324 -0.40422 -0.24132 -0.24685 -0.378592 -0.57697 -0.383437 -0.92216 0.014997 -0.3363 0.157307 -0.65433 0.398097 -0.889597 0.24078 -0.23527 0.56202 -0.37018 0.89858 -0.377383 0.33559 0.007337 0.65569 0.142582 0.89487 0.378085 0.23918 0.235505 0.37938 0.553475 0.39191 0.888895ZM1.12875 5.44916c0 -0.76217 0.48502 -0.64339 1.1581 -0.64339 0.67309 0 1.14821 -0.11878 1.14821 0.64339v7.42374c0 0.7721 -0.48502 0.6137 -1.14821 0.6137 -0.66318 0 -1.1581 0.1584 -1.1581 -0.6137V5.44916Z" strokeWidth={1} /><path id="Vector_2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M5.43451 5.44927c0 -0.42563 0.15837 -0.584 0.40583 -0.63349 0.24746 -0.0495 1.09871 0 1.39566 0 0.29695 0 0.41573 0.48501 0.40583 0.85125 0.25401 -0.3409 0.59125 -0.61092 0.97946 -0.78423 0.3882 -0.17331 0.81438 -0.2441 1.23777 -0.2056 0.41574 -0.02542 0.83224 0.03692 1.22234 0.18295 0.39 0.14603 0.7451 0.3725 1.0419 0.66469 0.2969 0.29219 0.5289 0.64356 0.6811 1.03129s0.2211 0.80314 0.2023 1.21924v5.06793c0 0.7721 -0.4751 0.6137 -1.1482 0.6137s-1.1482 0.1584 -1.1482 -0.6137V8.88399c0.0174 -0.20378 -0.0092 -0.40891 -0.0781 -0.60147 -0.0689 -0.19256 -0.1785 -0.36804 -0.3212 -0.51452s-0.31529 -0.26053 -0.506 -0.33441c-0.1907 -0.07387 -0.39507 -0.10585 -0.59923 -0.09374 -0.20321 -0.00516 -0.4052 0.0329 -0.5926 0.11167 -0.18739 0.07876 -0.35592 0.19644 -0.49442 0.34523 -0.13849 0.1488 -0.24381 0.32531 -0.30896 0.51786 -0.06515 0.19255 -0.08866 0.39675 -0.06897 0.59907V12.873c0 0.7721 -0.48502 0.6137 -1.15811 0.6137 -0.67308 0 -1.1482 0.1584 -1.1482 -0.6137V5.44927Z" strokeWidth={1} /></g></svg>
          </div>
        </div>
      </div>

      <div className='flex mb-[20vh] w-[90%] m-auto mt-[100px] flex-col md:flex-row gap-y-[20px] justify-between md:items-center'>
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
    </div>
  )
}

export default About