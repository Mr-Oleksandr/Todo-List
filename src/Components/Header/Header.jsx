import React from 'react';
import './Header.css'
const Header = ({todo, done}) => {
    return (
        <header>
            <h1 className="header-title">
                ToDo List
            </h1>
        </header>
    );
};

export default Header;
