import React, { Component } from 'react'
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
import { Redirect } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd'
const { Footer, Sider, Content } = Layout;
/**
 * 后台的组件
 */
export default class Admin extends Component {
  render() {
    const user = memoryUtils.user
    // 如果内存没有存储user => 当前没有登录
    if (!user || !user._id) {
      // this.props.history.replace('/login') 
       return <Redirect to='/login' />
    }
    return (
      <Layout style={{height: '100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header></Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
