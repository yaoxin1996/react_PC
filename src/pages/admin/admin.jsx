import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Layout } from 'antd'


import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
import Home from '../home/home'
import Category from '../category/category';
import Product from '../product/product'
import User from '../user/user'
import Role from '../role/role'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

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
          <Content style={{margin: '20px', background: '#fff' }}>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Route path='/charts/bar' component={Bar}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/pie' component={Pie}/>
              <Redirect to='/home' />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
