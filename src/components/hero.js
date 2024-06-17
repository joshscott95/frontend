import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <section id="home">
                <div className="hero">
                    <h1>Welcome to PropManaGPT</h1>
                    <p>Your all-in-one solution for rent management.</p>
                    <a href="#features" className="btn">Learn More</a>
                </div>
            </section>
        );
    }
}

export default Hero;
