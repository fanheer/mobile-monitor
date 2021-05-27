/**
 * 模拟手机内屏幕
 */
import { useEffect, useState } from 'react';
import Icon from '@/components/screen/icon';
import './index.scss';
import { IScreen, IIcons } from '@/common/types';
interface IProps {
    screenData: IScreen
}
export default function ScreenContainer(props: IProps) {
    const { screenData } = props;
   
    return (
        <div className="screen-container">
            <div className="icon-list">
                {screenData?.icons?.map((item: IIcons) => {
                    return (
                        <Icon key={item?.name} iconData={item} />
                    )
                })}
            </div>
        </div>
    )
}