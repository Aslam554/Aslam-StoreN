import React, { useEffect } from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import google from '../assets/google.jpg';
import apple from '../assets/apple.jpg';
import pay1 from '../assets/pay-1.jpg';
import pay2 from '../assets/pay-2.jpg';
import pay3 from '../assets/pay-3.jpg';
import pay4 from '../assets/pay-4.jpg';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const usefulLinks = [
    { title: 'useful Links', links: ['Home', 'Home', 'Home'] },
    { title: 'useful Links', links: ['About Us', 'About Us', 'About Us'] },
    { title: 'useful Links', links: ['Links', 'Links', 'Links'] },
  ];

  const paymentImages = [pay1, pay2, pay3, pay4];

  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)] text-white'>
      <div className='w-full lg:px-20 px-5 py-[60px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)] grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-start gap-10 grow'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-4xl font-bold text-white italic'>Aslam StoreN</h1>
            <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptatem <br />doloribus accusamus neque, quam laboriosam fugiat ipsa distinctio similique cumque?</p>
          </div>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className=' text-xl font-semibold capitalize'>Download our App Aslam Eats!</h1>
            <div className='flex justify-center items-center gap-4'>
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>

        {usefulLinks.map((section, index) => (
          <div key={index} data-aos='zoom-in' data-aos-delay='200'>
            <h1 className='text-xl font-semibold capitalize'>{section.title}</h1>
            <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
              {section.links.map((link, i) => (
                <li key={i} className='cursor-pointer hover:text-black'>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* 2nd box ends here*/}

      {/* 3rd box starts here*/}
      <div className='w-full lg:px-20 px-5 py-[40px]'>
        <hr className='border-t border-gray-300 py-3' />
        <div className='w-full flex 1g:flex-row flex-col justify-between items-center lg:gap-4 gap-10'>
          <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
            {paymentImages.map((img, index) => (
              <img key={index} src={img} alt="" className='w-[60px] rounded-lg' />
            ))}
          </div>
          <div className='lg:w-[70%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow'>
            <h1 className=' font-semibold text-xl'>Subscribe Aslam StoreN</h1>
          </div>
          <div className='lg:w-[20%] w-full px-3'>
            <p className='text-gray-500 lg:text-end text-center'>2024 powered by Aslam StoreN!</p>
          </div>
        </div>
      </div>
      {/* 3rd box ends here*/}
    </div>
  );
};

export default Footer;
