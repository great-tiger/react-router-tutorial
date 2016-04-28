import React from 'react'
import {Link} from 'react-router'
export default React.createClass({
	render(){
        console.log(this.props);
        /**
         * 该组件使用方式：
         * <NavLink to="/about">About</NavLink>
         *
         * 打印this.props
         * Object {to: "/about", children: "About"}
         *
         * 可见
         * <Link children="about" />
         * 等价于
         * <Link>about</Link>
         * 经验证，的确如此
         */

        return (
            <Link {...this.props} activeClassName='active'/>
        )
    }
})