"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

// import swiper slide
import style from '@/app/style/swiper.module.css'

import Image from 'next/image';
function Imageslider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {/*  slide */}
      <SwiperSlide className={style.SwiperSlide}>
    <Image 
     className=' object-center  w-[100%] h-[500px]'
     alt="slider"
     width={800}
     height={300}
      src={require("../../picture/slider/pic-1.jpg")} />
    </SwiperSlide>   
    {/*  slide */}
    <SwiperSlide className={style.SwiperSlide}>
    <Image 
    //  className='object-cover object-center rounded mx-auto w-[15rem]'
     className=' object-center  w-[100%] h-[500px]'
     alt="slider"
     width={800}
     height={300}
      src={require("../../picture/slider/pic-2.jpg")} />
    </SwiperSlide>
    {/*  slide */}
    <SwiperSlide className={style.SwiperSlide}>
    <Image 
    //  className='object-cover object-center rounded mx-auto w-[15rem]'
     className=' object-center  w-[100%] h-[500px]'
     alt="slider"
     width={800}
     height={300}
      src={require("../../picture/slider/pic-3.jpg")} />
    </SwiperSlide>
    {/*  slide */}
    <SwiperSlide className={style.SwiperSlide}>
    <Image 
    //  className='object-cover object-center rounded mx-auto w-[15rem]'
     className=' object-center  w-[100%] h-[500px]'
     alt="slider"
     width={800}
     height={300}
      src={require("../../picture/slider/pic-4.jpg")} />
    </SwiperSlide>
    {/*  slide */}
    <SwiperSlide className={style.SwiperSlide}>
    <Image 
    //  className='object-cover object-center rounded mx-auto w-[15rem]'
     className=' object-center  w-[100%] h-[500px]'
     alt="slider"
     width={800}
     height={500}
      src={require("../../picture/slider/pic-5.jpg")} />
    </SwiperSlide>
    {/*  slide */}
    <SwiperSlide className={style.SwiperSlide}>
    <Image 
    //  className='object-cover object-center rounded mx-auto w-[15rem]'
     className=' object-center  w-[100%] h-[500px]'
     alt="slider"
     width={800}
     height={400}
      src={require("../../picture/slider/pic-6.jpg")} />
    </SwiperSlide>
      
  </Swiper>
  )
}

export default Imageslider