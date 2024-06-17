import React from 'react';

class Features extends React.Component {
    render() {
        return (
            <section id="features">
                <h2>Features</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <h3>Rent Tracking</h3>
                        <p>Keep track of rent payments and due dates effortlessly.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Payment Management</h3>
                        <p>Manage all your payments in one place.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Tenant Communication</h3>
                        <p>Easily communicate with your tenants.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
