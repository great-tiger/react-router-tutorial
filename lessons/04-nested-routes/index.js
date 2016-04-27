import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

/**
 * 以下是嵌套路由的书写方式
 *
 * 他具体怎么用，还要看一下modules/App.js
 * 并结合网页效果，很好理解的
 * 主要是这句，渲染子视图
 */

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/repos" component={Repos}>
        <Route path="/repos/repo" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
