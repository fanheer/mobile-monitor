/**
 * 模拟手机桌面 swiper实现滑动
 */
import React, { Component } from 'react'
import "./index.scss";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import ScreenContainer from '@/components/screen/container';
SwiperCore.use([Pagination]);
const list = [{
    icons: [
        { name: 'app1', logo: '' },
        { name: 'app2', logo: '' },
        { name: 'app3', logo: '' },
        { name: 'app4', logo: '' }
    ]
}, {

}, {

}]

export default class Screen extends Component {
    render() {
        return (
            <>
                {/* 背景图片 TODO: 可以设置手机背景 */}
                <img
                    className="mobile-bg"
                    src={require('@/assets/img/background2.jpeg')}
                />
                <Swiper
                    loop
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        list.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <ScreenContainer screenData={item} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </>

        )
    }
}
