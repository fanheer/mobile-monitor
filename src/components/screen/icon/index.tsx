import { IIcons } from '@/common/types';
import './index.scss';
interface IProps {
    iconData: IIcons
    onClick: (data: IIcons) => void
}
export default function Icon(props: IProps) {
    const { iconData, onClick } = props
    const clickIcon = (e: any) => {
        e.preventDefault()
        onClick(iconData)
    }
    return (
      <div className="mobile-icon" onClick={(e) => clickIcon(e)}>
        {iconData?.logo ? (
          <img className="icon" src={iconData?.logo} />
        ) : (
          <div className="icon-empty" />
        )}
        <span className="text">{iconData?.nameCN}</span>
      </div>
    );
}
