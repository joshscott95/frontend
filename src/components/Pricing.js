import React from 'react';

class Pricing extends React.Component {
    render() {
        return (
            <section id="pricing">
                <h2>Pricing</h2>
                <div className="pricing-plans">
                    <div className="plan">
                        <h3>Basic</h3>
                        <p>$9.99/month</p>
                        <a href="#" className="btn">Get Started</a>
                    </div>
                    <div className="plan">
                        <h3>Pro</h3>
                        <p>$19.99/month</p>
                        <a href="#" className="btn">Get Started</a>
                    </div>
                    <div className="plan">
                        <h3>Enterprise</h3>
                        <p>$49.99/month</p>
                        <a href="#" className="btn">Get Started</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;
