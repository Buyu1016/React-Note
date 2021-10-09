import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RootRoute from './components/DemoEight/RootRoute'
import VueLink from './components/DemoEight/VueLink';

export default function App() {

    return (
      <BrowserRouter>
        <div>
          <nav>
            <VueLink to={{
              name: 'Home'
            }}>首页</VueLink>
            <VueLink to={{
              name: 'User'
            }}>我的页面</VueLink>
            <VueLink to={{
              name: 'News'
            }}>新闻页面</VueLink>
          </nav>
          <div>
            {/* 自动渲染页面 */}
            <RootRoute />
          </div>
        </div>
      </BrowserRouter>
    );
}
