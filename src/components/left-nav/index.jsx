import React, { Component, useState  } from 'react'
import { Link } from 'react-router-dom'

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
  getItem('首页', '1', <PieChartOutlined />),
  getItem('商品', 'sub1', <MailOutlined />, [
    getItem('品类管理', '2'),
    getItem('商品管理', '3'),
  ]),
  getItem('用户管理', '4', <ContainerOutlined />),
  getItem('角色管理', '5', <ContainerOutlined />),
  getItem('图形图表', 'sub2', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
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
         <Button
         type="primary"
         onClick={toggleCollapsed}
         style={{
           marginBottom: 16,
         }}
       >
         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
       </Button>
       <Menu
         defaultSelectedKeys={['1']}
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
