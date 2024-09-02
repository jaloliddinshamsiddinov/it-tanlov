import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar } from '@mui/material';

export default function SwiperComponent() {
    return (
        <div className='mb-[60px] container mx-auto px-4'>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='swiperitem w-full h-[350px] bg-blue-200 hover:bg-blue-950 hover:scale-[1] hover:text-white rounded-3xl p-6 text-start'>
                        <p>Ushbu tanlov yoshlar o‘rtasida IT‘ga bo‘lgan qiziqishni yanada orttirish va xalqimiz IT savodxonligini oshirishga yordam beradi degan umiddamiz.</p>
                        <Avatar className='my-5' alt="Remy Sharp" src="https://framerusercontent.com/images/LGtgZHjRFYgjKRSvv9HqBYWnNk.webp" />
                        <h1 className='font-bold'>Rustam Karimjonov</h1>
                        <p className='text-gray-700'>Raqamli texnologiyalar vazirining o‘rinbosari</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[350px] bg-blue-200 hover:bg-blue-950 hover:scale-[1] hover:text-white rounded-3xl p-6 text-start'>
                        <p>"Kelajak ITniki" tanlovida ishtirok etish ortidan yoshlar o‘zlarida mavjud yaratuvchanlik qobiliyatlarini charxlab borishlari mumkin bo‘ladi</p>
                        <Avatar className='my-5' alt="Remy Sharp" src="	https://framerusercontent.com/images/g8EarzlDdKjfI2RCqck1J91uB8.webp" />
                        <h1 className='font-bold'>Shuhrat Sattorov</h1>
                        <p className='text-gray-700'>Raqamli ta'limni rivojlantirish markazi direktori</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[350px] bg-blue-200 hover:bg-blue-950 hover:scale-[1] hover:text-white rounded-3xl p-6 text-start'>
                        <p>Men o‘quvchilar o‘rtasida bo‘ladigan tanlov jarayonlarida ishtirok etaman va adolatli baholash bo‘lishiga yordam beraman.</p>
                        <Avatar className='my-5' alt="Remy Sharp" src="https://framerusercontent.com/images/EgxiOjrIWdK7c1caElMZkOWoJUU.jpg" />
                        <h1 className='font-bold'>Sa’dullo Quronov</h1>
                        <p className='text-gray-700'>Bolalar yozuvchisi</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
