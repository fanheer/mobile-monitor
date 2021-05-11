import React from 'react'
import './index.scss';
export default function ScreenContainer() {
    return (
        <div className="screen-container">
            <img
                className="mobile-bg"
                src={require('@/assets/img/background1.jpeg')}
            />
        </div>
    )
}