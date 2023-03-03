// React 框架的核心包
import React from 'react';
// ReactDOM 框架的核心包，用于渲染组件
import ReactDOM from 'react-dom/client';
// 全局样式
import './index.css';
// 引入 App 组件，最根本的根组件
import App from './App';

// 用 ReactDOM.render() 方法渲染 App 组件，将其挂载到 id 为 root 的 DOM 元素上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
