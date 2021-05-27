/**
 * 模拟手机内屏幕
 */
import Icon from '@/components/screen/icon';
import './index.scss';
import { IIcons } from '@/common/types';
interface IProps {
    iconlist: IIcons[]
}
export default function ScreenContainer(props: IProps) {
    const { iconlist } = props;
   
    return (
        <div className="screen-container">
            <div className="icon-list">
                {iconlist?.map((item: IIcons) => {
                    return (
                        <Icon key={item?.nameCN} iconData={item} />
                    )
                })}
            </div>
        </div>
    )
}