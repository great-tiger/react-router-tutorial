import React from 'react'
import NavLink from './NavLink'
import {IndexLink} from 'react-router'

/**
 * 如果想直接通过下面的代码导航到首页，你会发现是不可能的
 * 因为他始终是active的
 * <NavLink to="/">Home</NavLink>
 *
 * 一共有两种解决方法：
 * 1、IndexLink
 * 2、onlyActiveOnIndex
 * <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
 */

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
