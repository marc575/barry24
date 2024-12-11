import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import { xbet } from "../../data/xbet";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination} from 'swiper/modules';

export default function Guide() {

    return (
        <>
            <div className="container my-5">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    loop={true}
                    breakpoints={{
                      759: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                { xbet.map(({id, cover, title, description}) => 
                    <SwiperSlide key={id}>
                        <div className="card rounded-3">
                            <img src={cover} className="card-img rounded-3" alt={title} />
                            <div className="card-body">
                                <h5>{title}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ) }
                </Swiper>
            </div>
        </>
    )
}