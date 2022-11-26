import React, { Component } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './login.less'
import logo from './images/logo.png'

/**
 * 登录的组件
 */

export default class Login extends Component {
  render() {
    this.onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt=""  />
          <h1>React: 后台管理系统</h1>
        </header>
        <section className='login-content'>
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, whitespace: true, message: '用户名必填' },
                { max: 12, message: '用户名最多12位' },
                { min: 4, message: '用户名最少为4位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字或下划线组成' }
              ]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: '密码必填'},
              ]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}