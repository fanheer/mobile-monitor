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
import { getTimer } from '@/common/functions/time';
interface IState {
    currentTime: string
}
interface IProps {
}
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
export default class Screen extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            currentTime: getTimer()
        }
    }
    componentDidMount(){
        let interval = setInterval(() => this.setState({currentTime: getTimer()}), 1000);
    }
    render() {
        const header = {
            operators: '中国移动',
            timer: this.state.currentTime
        }
        return (
            <>
                {/* TODO： 头部通知栏 */}
                <div className="header-notice">
                    <div className="operators">{header?.operators}</div>
                    <div className="time">{header?.timer}</div>
                    <div className="battery">100%</div>
                </div>
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
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {
                        list.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
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
