import React from 'react'
import Header from './header'
import "./index.scss";

export default function Layout(props: any) {
    return (
        <div className="base-container">
            <div className="mobile-simulator">
                <div className="head">
                    <div className="circle1"></div>
                    <div>
                        <div className="circle2"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="screens">
                    <Header />
                    {props.children}
                </div>
                <div className="homebtn"></div>
            </div>
        </div>
           
    )
}
