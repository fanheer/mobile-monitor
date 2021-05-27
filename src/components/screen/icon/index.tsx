import { IIcons } from '@/common/types';
import React from 'react'
import './index.scss';
interface IProps {
    iconData: IIcons
}
export default function Icon(props: IProps) {
    const { iconData } = props
    return (
        <div className="mobile-icon">
            {
                iconData?.logo
                    ? <img className="icon" src={iconData?.logo} />
                    :
                    <div className="icon-empty" />
            }
            <span className="text">{iconData?.nameCN}</span>
        </div>
    )
}
