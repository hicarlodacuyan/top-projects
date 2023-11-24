import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <header>
            <h1 className='header-title'>
                <span>Resume</span> Builder
            </h1>
            <p className='header-para'>Made with ❤️ by Carlo Dacuyan</p>
        </header>
    );
};

export default Header;