import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const { className } = this.props; 
        return (
            <div className={`footer ${className}`}>
                footer
            </div>
        )
    }
}
