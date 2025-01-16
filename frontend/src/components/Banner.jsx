import React, { useEffect } from 'react'
import order from "../assets/deal-bgn.png"
import AOS from "aos"
import 'aos/dist/aos.css'
const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div className="w-full lg:px-28 px-5 py-[88px]">
      <div data-aos="zoom-in" data-aos-delay="100" className="w-full h-[300px] rounded-1g bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4 bg-emerald-600 text-white" style={{ backgroundImage: `url(${order})`}}>
        <h1 className='text-white text-2xl  font-semibold'>Everyday Shopping</h1>
        <h1 className='text-white font-extrabold text-[42px] leading-[58px] text-center'>Deal of The Day</h1>
      </div>
    </div>
  )
}

export default Banner