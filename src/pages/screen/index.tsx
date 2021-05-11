import React, { Component } from 'react'
import "./index.scss";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Pagination]);
const list = [{}, {}, {}, {}]

export default class Screen extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <>
                <Swiper
                    loop
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        list.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="screen">
                                        {index}
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </>

        )
    }
}
