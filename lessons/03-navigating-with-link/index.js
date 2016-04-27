import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
/**
 *
 * 这里其实就是路由配置
 * <Router history={hashHistory}>
 *  <Route path="/" component={App}/>
 *  <Route path="/repos" component={Repos}/>
 *  <Route path="/about" component={About}/>
 * </Router>
 *
 * history 有三种配置方式
 * browserHistory  /repos  /about
 * hashHistory #/repos #/about
 * createMemoryHistory 地址一直不变
 */
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
