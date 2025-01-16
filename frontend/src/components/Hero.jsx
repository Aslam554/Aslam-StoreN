import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headsetn.png';
import earbuds from '../assets/earbudsn.png';
import dslr from '../assets/dslrn.png';
import AOS from "aos";
import 'aos/dist/aos.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }, []);

  const slides = [
    {
      backgroundImage: headset,
      title: "Quality Headphones",
      subtitle: "100% trusted Electronic Gadgets",
      buttonText: "Online Order"
    },
    {
      backgroundImage: earbuds,
      title: "Wireless Earbuds",
      subtitle: "100% trusted Electronic Gadgets",
      buttonText: "Online Ordering Now"
    },
    {
      backgroundImage: dslr,
      title: "DSLR 360 Camera",
      subtitle: "100% trusted Electronic Gadgets",
      buttonText: "Online Ordering Now"
    }
  ];

  return (
    <div id='hero' className='w-[97vw] flex justify-center items-center lg:h-[700px] h-[600px]'>
      <Slider className='w-[80%] h-[90%]' {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='w-full'>
            <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
              <h1 data-aos="zoom-in" data-aos-delay='50' className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get up to 80% off</h1>
              <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-[40px] sm:text-[60px] lg:text-[100px] uppercase font-bold leading-[50px] sm:leading-[70px] lg:leading-[120px]'>{slide.title} <br /></h1>
              <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-xl sm:text-2xl'>{slide.subtitle}</h1>
              <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-white font-semibold uppercase'>{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
