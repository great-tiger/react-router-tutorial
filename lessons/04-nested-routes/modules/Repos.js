import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
    render(){
        return (
            <div>
                <div>repos</div>
                <Link to="/repos/repo">repo</Link>
                {this.props.children}
            </div>
        )
    }
})