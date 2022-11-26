/**
 * 入口文件
 */
// import 'antd/dist/antd.min.css'

import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'
import { createRoot } from 'react-dom/client';

import { ConfigProvider } from 'antd';

// 将App组件标签渲染到index页面的div上
// ReactDOM.render(<App/>, document.getElementById('root'))

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}>
    <App />
  </ConfigProvider>
);
