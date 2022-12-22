import React, { Component } from 'react'
import { formateDate } from '../../utils/dateUtils'
import { Button, Modal, Space } from 'antd';
import { withRouter } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import items from '../left-nav/menuConfig'
import './index.less'
const { confirm } = Modal;

class Header extends Component {
  componentDidMount () {
    this.getTime()
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  state = {
    currentTime: formateDate(Date.now()),
  }
  getTime = () => {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: formateDate(Date.now())
      })
    }, 1000);
  }
  getTitle = () => {
    let pathname = this.props.location.pathname
    let title = ''
    items.forEach(item => {
      if (item.key == pathname) {
        title = item.label.props.children
      } else if (item.children) {
        const list = item.children.find(val => val.key == pathname)
        if (list) {
          title = list.label.props.children
        }
      }
    })
    return title
  }
  showConfirm = () => {
    confirm({
      title: '提示',
      content: '确认退出吗？',
      onOk: () => {
        console.log('OK');
        storageUtils.removeUser()
        memoryUtils.user = {}
        this.props.history.replace('/login')
      }
    });
  };
  render() {
    const username = memoryUtils.user.username
    const title = this.getTitle()
    return (
      <div className='header'>
        <div className='header-top'>
          <span>欢迎&nbsp;{username}&nbsp;</span>
          <span className='logout' onClick={this.showConfirm}>退出</span>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>{ title }</div>
          <div className='header-bottom-right'>
            <span>{ this.state.currentTime }</span>
            <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="" />
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header) 