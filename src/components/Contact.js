import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit" className="btn">Send</button>
                </form>
            </section>
        );
    }
}

export default Contact;