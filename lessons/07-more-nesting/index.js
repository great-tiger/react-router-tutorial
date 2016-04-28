import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

/**
 * 路由嵌套
 * 路由对应的组件就组成了一个树
 * 比如下面的设置
 *             App
 *          |        |
 *       Repos     About
 *          |
 *       Repo
 * 父级组件可以通过下面的表达访问到子组件
 * {this.props.children}
 */

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));
