import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
/**
 * 在App中
 * 我们会通过this.props.children来输出子组件
 * 如果children为空时，我们会采用IndexRoute采用的组件
 */
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
