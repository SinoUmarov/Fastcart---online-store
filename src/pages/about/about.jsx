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
import videoabout from "../../shared/imgs/about.mp4"
import videotom  from "../../shared/imgs/tomcruce.mp4"
const About = () => {
  return (
    <div className="bg-[#fafafa] text-[#1e1e1e]">
      {/* Breadcrumb */}
      <div className="text-sm w-[90%] mx-auto py-6 text-[#888]">
        Home / <span className="text-[#000] font-medium">About</span>
      </div>

    
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-[90%] mx-auto">
        <div className="md:w-[50%]">
          <h1 className="text-4xl font-bold text-[#111]">Our Story</h1>
          <p className="text-lg text-[#555] mt-6 leading-relaxed">
            Launched in 2015, <span className="font-semibold text-[#DB4444]">Exclusive</span> is South Asia’s premier online shopping marketplace with a strong presence in Bangladesh. Backed by advanced marketing, data, and service solutions, Exclusive empowers over <strong>10,500 sellers</strong> and <strong>300 brands</strong>, reaching more than <strong>3 million customers</strong> across the region.
            <br /><br />
            With over <strong>1 million products</strong> and a rapidly expanding catalog, Exclusive brings diversity in categories ranging from consumer electronics to fashion and lifestyle.
          </p>
        </div>
        <div className="md:w-[50%]">
        <video src={videoabout} autoPlay muted loop playsInline className='h-[900px]'></video>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[90%] mx-auto mt-20 mb-28">
        {[
          { img: Services6, value: "10.5k", label: "Sellers active on our site" },
          { img: Services, value: "33k", label: "Monthly Product Sales", bg: true },
          { img: Services1, value: "45.5k", label: "Active Customers" },
          { img: Services2, value: "25k", label: "Annual Gross Sales" },
        ].map(({ img, value, label, bg }, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 ${
              bg
                ? "bg-[#DB4444] text-white shadow-md hover:shadow-xl"
                : "bg-white border border-gray-200 hover:shadow-md"
            }`}
          >
            <img className="w-12 mb-4" src={img} alt="" />
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className="text-sm mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="w-[90%] mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { img: img1, name: "Tom Cruise", role: "Founder & Chairman" },
          { img: img2, name: "Emma Watson", role: "Managing Director" },
          { img: img3, name: "Will Smith", role: "Product Designer" },
        ].map(({ img, name, role }, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg p-5 text-center">
            <img src={img} alt={name} className="rounded-xl mb-4 w-full bg-[#f3f3f3] p-4" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
            <div className="flex justify-center mt-4 gap-4">
              {["twitter", "instagram", "linkedin"].map((platform, j) => (
                <a href="#" key={j} className="hover:text-[#DB4444] transition">
                  <i className={`fab fa-${platform} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-[15vh]">
        {[
          {
            icon: Services6,
            title: "FREE AND FAST DELIVERY",
            desc: "Free delivery for all orders over $140",
          },
          {
            icon: Services7,
            title: "24/7 CUSTOMER SERVICE",
            desc: "Friendly 24/7 customer support",
          },
          {
            icon: Services8,
            title: "MONEY BACK GUARANTEE",
            desc: "We return money within 30 days",
          },
        ].map(({ icon, title, desc }, i) => (
          <div key={i} className="bg-white p-6 rounded-lg text-center shadow hover:shadow-md transition">
            <img className="w-12 mx-auto mb-4" src={icon} alt={title} />
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="text-sm text-gray-600 mt-2">{desc}</p>
          </div>
        ))}
      </div>
   <div className="flex items-center justify-center h-screen m-0 p-0 ">
  <video
    className="w-[95%] h-[90%] object-cover"
    autoPlay
    muted
    loop
    playsInline
    src={videotom}
  ></video>
</div>

    </div>
  )
}

export default About
