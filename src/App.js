import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import Hero from './components/hero';
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
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default App;
