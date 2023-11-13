 // Import Swiper React components
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation } from 'swiper/modules';

 import 'swiper/css';
 import 'swiper/css/navigation';
 

 function Modal() {
    return (
      <>
        <h3>안녕하세요</h3>
        <Swiper
      slidesPerView={1}
       navigation={true} modules={[Navigation]}
       >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
      </>
    )
  }


  export default Modal;
  
