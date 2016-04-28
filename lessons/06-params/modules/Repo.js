import React from 'react'
export default React.createClass({
    /**
     * url定义
     * /repos/:userName/:repoName
     * 参数取值
     * this.props.params中取值
     */
    render(){
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
})