import React from 'react';
import { Provider } from 'react-redux';
import UserList from './components/UserList';
import store from './redux/store';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Hero />
                    <Features />
                    <Pricing />
                    <About />
                    <Contact />
                    <UserList /> {/* Add UserList here */}
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default App;
