import Screen from "@/pages/screen";
import "./index.scss";
export default function Base() {
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
                   <Screen />
                </div>
                <div className="homebtn"></div>
            </div>
        </div>
    )
}
