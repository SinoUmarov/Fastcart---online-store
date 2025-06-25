import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBrandId, changeCategory, changePrice, getBrand, getCategories, getProducts } from '../../entities/reducerc/Products'
import { Card } from '../lazy/lazy'

import "../../app/styles/styles.css"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import StarRating from '../../shared/components/ratingStars/ratingStars'
import Loading from '../../shared/components/loading/loading'


const API = import.meta.env.VITE_API_URL

const Products = () => {
  const categories = useSelector((store) => store.products.categories)
  const brands = useSelector((store) => store.products.brands)
  const dispatch = useDispatch()
  let products = useSelector((store) => store.products.products)

  const min = useSelector((store) => store.products.min)
  const max = useSelector((store) => store.products.max)
  const selectedBrand = useSelector((store) => store.products.selectedBrand)
  const selectedCategory = useSelector((store) => store.products.selectedCategory)

  useEffect(() => {
    filter()
    dispatch(getCategories())
    dispatch(getBrand())
  }, [])

  function filter() {
    console.log("hello");

    const params = {};
    if (min) params.MinPrice = min;
    if (max) params.MaxPrice = max;
    if (selectedBrand) params.BrandId = selectedBrand;
    if (selectedCategory) params.CategoryId = selectedCategory;

    // 2) сериализовать в строку "MinPrice=10&MaxPrice=100&BrandId=5"
    const queryString = new URLSearchParams(params).toString();

    // 3) использовать в запросе
    dispatch(getProducts(queryString));
  }

  if (products) {
    return (
      <div>
        <div className='w-[90%] my-[30px] md:flex-row m-auto flex flex-col gap-y-[10px]'>
          <p className='text-[#8d8d8d] text-[20px] w-[100%] m-auto'>Home / <samp className='text-[#000]'>Explore Our Products</samp></p>
          <div className='flex md:hidden justify-between w-[100%] items-center border-[1px] rounded-[5px] px-[10px] py-[12px]'>
            <input className='w-[90%] text-[18px] outline-0' type="search" placeholder='What are you looking for?' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          </div>
          <div className='flex justify-between w-[100%] md:w-[20%]'>
            <select className='w-[48%] md:w-[100%] px-[10px] py-[12px] text-[18px] border-[1px] rounded-[5px]'>
              <option value="Populary">Populary</option>
            </select>
            <select className='w-[48%] px-[10px] md:hidden py-[12px] text-[18px] border-[1px] rounded-[5px]'>
              <option value="Filter (3)">Filter (3)</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-[90%] m-auto md:justify-between'>
          <div className='hidden md:flex flex-col w-[20%]'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger><p className='text-[16px] font-[600]'>Category</p></AccordionTrigger>
                <AccordionContent>
                  {categories.map((el) => (
                    <div key={el.id} className='flex gap-[10px]'>
                      <input type="radio"
                        id={`category-${el.id}`}
                        name="category"
                        value={el.id}
                        onChange={(e) => {
                          dispatch(changeCategory(el.id))
                        }}
                      />
                      <label htmlFor={el.id} className='text-[16px] text-[#505050] font-[400]'>{el.categoryName}</label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger><p className='text-[16px] font-[600]'>Brands</p></AccordionTrigger>
                <AccordionContent>
                  {brands.map((el) => (
                    <div key={el.id} className='flex gap-[10px]'>
                      <input type="radio"
                        id={`brand-${el.id}`}
                        name="brand"
                        value={el.id}
                        onChange={(e) => {
                          dispatch(changeBrandId(el.id))
                        }}
                      />
                      <label htmlFor={el.id} className='text-[16px] text-[#505050] font-[400]'>{el.brandName}</label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger><p className='text-[16px] font-[600]'>Features</p></AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>Metallic</label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'> Plastic cover</label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>8GB Ram</label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>Super power</label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'> Large Memory</label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger><p className='text-[16px] font-[600]'>Price range</p></AccordionTrigger>
                <AccordionContent>
                  <div className="w-full max-w-sm mx-auto p-4">
                    <div className="relative h-10 mb-4">
                      <input type="range" className='w-full h-[5px] range-slider' />
                    </div>
                    <div className="flex justify-between gap-4 mb-4">
                      <div className="flex flex-col text-sm w-1/2">
                        <label className="text-gray-500 mb-1">Min</label>
                        <input
                          type="number"
                          value={min}
                          onChange={(e) => {
                            dispatch(changePrice({ min: e.target.value, max }))
                          }}
                          className="border px-3 py-2 rounded-md text-sm"
                        />
                      </div>
                      <div className="flex flex-col text-sm w-1/2">
                        <label className="text-gray-500 mb-1">Max</label>
                        <input
                          type="number"
                          value={max}
                          onChange={(e) => {
                            dispatch(changePrice({ min, max: e.target.value }))
                          }}
                          className="border px-3 py-2 rounded-md text-sm"
                        />
                      </div>
                    </div>
                    <button onClick={() => {
                      filter()
                    }} className="w-full border border-red-500 text-red-500 py-2 rounded-md font-medium hover:bg-red-50">
                      Apply
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger><p className='text-[16px] font-[600]'>Condition</p></AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-[10px]">
                    {[
                      { label: "Any", value: "any" },
                      { label: "Refurbished", value: "refurbished" },
                      { label: "Brand new", value: "brand_new" },
                      { label: "Old items", value: "old" }
                    ].map((item, index) => (
                      <div className="flex gap-[10px]" key={item.value}>
                        <input
                          type="radio"
                          name="condition"
                          id={`condition-${index}`}
                          value={item.value}
                        />
                        <label
                          htmlFor={`condition-${index}`}
                          className="text-[16px] text-[#505050] font-[400]"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger><p className='text-[16px] font-[600]'>Ratings</p></AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col gap-y-[10px]'>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>
                        <StarRating value={1} />
                      </label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>
                        <StarRating value={2} />
                      </label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>
                        <StarRating value={3} />
                      </label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>
                        <StarRating value={4} />
                      </label>
                    </div>
                    <div className='flex gap-[10px]'>
                      <input type="checkbox" />
                      <label className='text-[16px] text-[#505050] font-[400]'>
                        <StarRating value={5} />
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
          <div className='flex flex-col flex-wrap md:flex-row w-[100%] md:w-[83%] gap-y-[20px]'>
            {
              products?.map((el) => (
                <div className='w-[100%] md:w-[33%]' key={el.id}>
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
            }
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <Loading />
    )
  }
}

export default Products