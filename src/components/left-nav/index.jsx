import React, { Component, useState  } from 'react'
import { Link, Redirect } from 'react-router-dom'

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

import Home from '../../pages/home/home'

import'./index.less'
import logo from '../../assets/images/logo.png'
/**
 * 左侧导航组件
 */
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to="/home">首页</Link>, '/home', <PieChartOutlined />),
  getItem('商品', '1', <MailOutlined />, [
    getItem(<Link to="/category">品类管理</Link>, '2'),
    getItem(<Link to="/product">商品管理</Link>, '3'),
  ]),
  getItem(<Link to="/user">用户管理</Link>, '/product', <ContainerOutlined />),
  getItem(<Link to="/role">角色管理</Link>, '5', <ContainerOutlined />),
  getItem('图形图表', 'sub2', <MailOutlined />, [
    getItem(<Link to="/charts/bar">柱状图</Link>, '6'),
    getItem(<Link to="/charts/line">折线图</Link>, '7'),
    getItem(<Link to="/charts/pie">饼图</Link>, '8'),
  ]),
];

export default class LeftNav extends Component {
  render() {
    // const [collapsed, setCollapsed] = useState(false);
    let collapsed = false
    let setCollapsed = false
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    return (
      <div className='left-nav'>
        <Link to="/">
          <header className='left-nav-header'>
            <img src={logo} alt="" />
            <h1>Y&_后台</h1>
          </header>
        </Link>
         {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
        <Menu
          defaultSelectedKeys={['/home']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    )
  }
}
