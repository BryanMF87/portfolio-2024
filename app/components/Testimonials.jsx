"use client";
import React from 'react';
import Image from 'next/image';
import { testimonialData } from '../data';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

    return (
        <div id="testimonials" className="relative px-6 py-40 md:px-20">
             <p className="absolute top-36 -left-[3.25rem] shrink-0 transform rotate-90 text-ccGray font-bold tracking-tight hidden md:block md:text-4xl md:top-1/2 lg:text-5xl lg:-left-[5.25rem]">Testimonials</p>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {testimonialData.map((testimonial,index) => (
                    <SwiperSlide key={index}>
                        <div className="md:flex md:items-center md:gap-10 md:w-[40rem] md:mx-auto">
                            <div className="relative shrink-0 flex justify-center md:w-3/12 md:-mt-10 lg:w-4/12 lg:-mt-20">
                                <Image
                                    src="/german2.png" 
                                    alt={testimonial.alt} 
                                    width="100"
                                    height="100"
                                    className="w-56 h-auto object-cover md:w-full"
                                />
                                {/* pink box */}
                                <div className="absolute bottom-1 z-[-2] bg-ccHighlight w-52 h-32 mx-auto rounded-xl md:w-11/12 md:h-28"></div>
                            </div>
                            <div className="relative font-medium text-center mb-14 sm:px-12 md:text-left md:px-0 md:w-9/12 lg:w-8/12 lg:mb-20">
                                <h2 className="text-ccOffWhite text-5xl md:text-[2.5rem]">{testimonial.name}</h2>
                                <p className="text-ccHighlight text-2xl mt-3 mb-4 md:mt-2">{testimonial.company}</p>
                                <p className="text-ccGray text-lg">{testimonial.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials;