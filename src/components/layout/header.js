import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const { className } = this.props; 
        return (
            <div className={`header ${className}`}>
                headerbar
            </div>
        )
    }
}
