import { IIcons } from '@/common/types';
import React from 'react'
import './index.scss';
interface IProps{
    iconData: IIcons
}
export default function Icon(props: IProps) {
    const { iconData } = props
    return (
        <div className="mobile-icon">
            <div className="icon">
            
            </div>
            <span className="text">{iconData?.name}</span>
        </div>
    )
}
