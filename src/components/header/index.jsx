import React, { Component } from 'react'
import './index.less'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-top'>
          <span>欢迎&nbsp;{132}&nbsp;</span>
          <span className='logout'>退出</span>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>首页</div>
          <div className='header-bottom-right'>
            <span>2022-12-05 10:12:36</span>
            <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="" />
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}
