import React, { useEffect } from 'react';
import insta1 from "../assets/insta-1.jpg";
import insta2 from "../assets/insta-2.jpg";
import insta3 from "../assets/insta-3.jpg";
import insta4 from "../assets/insta-4.jpg";
import insta5 from "../assets/insta-5.jpg";
import insta6 from "../assets/insta-6.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

const Insta = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }, []);
  const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6];
  return (
    <div className="w-full lg:px-20 px-5 py-[80px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)] flex flex-col justify-center items-center gap-4 text-white">
      <h1 data-aos="zoom-in" data-aos-delay="100" className="text-themepurple text-xl font-semibold capitalize">Our Instagram Shop</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className="font-semibold text-[42px] leading-[50px] text-center capitalize">Follow on Instagram</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className="w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8">
        {instaImages.map((image, index) => (
          <img key={index} src={image} alt="" className='rounded-lg hover:scale-[1.05] transition-all duration-300' />
        ))}
      </div>
      <button data-aos='zoom-in' data-aos-delay='400' className='bg-emerald-700 text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-12 uppercase hover:scale-[1.05] transition-all duration-300'>#AslamStoreN</button>
    </div>
  )
}
export default Insta;
