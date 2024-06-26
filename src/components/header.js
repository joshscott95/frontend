import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="logo">PropManaGPT</div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
