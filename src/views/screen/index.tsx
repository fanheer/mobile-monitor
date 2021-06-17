/**
 * 模拟手机桌面 swiper实现滑动
 */
import React, { Component } from 'react'
import SwiperCore, { Pagination } from 'swiper';
import ScreenContainer from '@/components/screen/container';
import _ from "lodash";
import { ICONS } from "@/common/constants/icon";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import "./index.scss";
import { IIcons } from '@/common/types';
interface IState {
    iconList: any
}
interface IProps {
}
SwiperCore.use([Pagination]);
export default class Screen extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            iconList: [],
        }
    }
    componentDidMount() {
        /**
         * 初始化屏幕数据
         * 初始化icon
         */
        let iconList: any =  _.chunk(ICONS, 20)
        // 初始化头部通知栏 时间
        this.setState({
            iconList
        })
    }
    render() {
        
        const { iconList } = this.state
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
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {
                        iconList.map((item: IIcons[], index: number) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ScreenContainer iconlist={item} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </>

        )
    }
}
