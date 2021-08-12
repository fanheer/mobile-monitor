import React, { Component } from 'react';
import { getTimer } from '@/common/functions/time';
import './index.scss';

interface IState {
  currentTime: string;
  interval: any;
}
interface IProps {}
export default class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentTime: getTimer(),
      interval: null,
    };
  }
  componentDidMount() {
    /**
     * 初始化屏幕数据
     * 初始化icon
     */
    // 初始化头部通知栏 时间
    let interval = setInterval(
      () => this.setState({ currentTime: getTimer() }),
      1000,
    );
    this.setState({
      interval,
    });
    HTMLElement.prototype.__defineGetter__('currentStyle', function () {
      return this.ownerDocument.defaultView.getComputedStyle(this, null);
    });
    var Airport = document.getElementById('_container')?.currentStyle?.backgroundColor;
    console.log('_container背景色: ', Airport);
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    const header = {
      operators: '中国移动',
      timer: this.state.currentTime,
    };
    return (
      <div className="header-notice">
        {/* TODO： 头部通知栏：电池电量icon显示 */}
        <div className="operators">{header?.operators}</div>
        <div className="time">{header?.timer}</div>
        <div className="battery">100%</div>
      </div>
    );
  }
}
