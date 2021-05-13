/**
 * 模拟手机内屏幕
 */
import { useEffect, useState } from 'react';
import Icon from '@/components/screen/icon';
import './index.scss';
import { IScreen, IIcons } from '@/common/types';
import { getTimer } from '@/common/functions/time';
interface IProps {
    screenData: IScreen
}
export default function ScreenContainer(props: IProps) {
    const { screenData } = props;
    const [ct, setCt] = useState(getTimer())
    useEffect(() => {
        let interval = setInterval(() => setCt(getTimer()), 1000);
    }, [])
    const header = {
        operators: '中国移动',
        timer: ct
    }
    return (
        <div className="screen-container">
            {/* TODO： 头部通知栏 */}
            <div className="header-notice">
                <div>{header?.operators}</div>
                <div className="time">{header?.timer}</div>
                <div></div>
            </div>
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