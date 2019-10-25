import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="." className="logo">
                    <b>facebook</b>
                </a>
                <button className="profile">My Profile</button>
            </div>
        );
    }
}

export default Header;
