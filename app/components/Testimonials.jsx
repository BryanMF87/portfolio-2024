"use client";
import React from 'react';
import Image from 'next/image';
import { testimonialData } from '../data';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans ({
    subsets: ['latin'],
    weight: '700',
});



const Testimonials = () => {

    return (
        <div className="px-6 pb-40">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {testimonialData.map((testimonial,index) => (
                    <SwiperSlide key={index}>
                        <div className="md:flex md:gap-10 md:w-[35rem] md:mx-auto">
                            <Image
                                src="/german.png" 
                                alt={testimonial.alt} 
                                width="100"
                                height="100"
                                className="w-9/12 h-auto object-cover mx-auto md:w-52 md:shrink-0"
                            />
                            <div className="relative font-medium text-center mb-14 md:text-left">
                                <p className={`font-sans absolute top-14 left-0 z-[-1] font-bold text-9xl text-ccGray2 leading-10`}>"</p>
                                <h2 className="text-ccOffWhite text-3xl">{testimonial.name}</h2>
                                <p className="text-ccHighlight text-lg mt-1 mb-4">{testimonial.company}</p>
                                <p className="text-ccGray text-lg">{testimonial.description}</p>
                                <p className="absolute bottom-[-70px] right-0 z-[-1] font-bold text-9xl text-ccGray2 leading-10">"</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials;