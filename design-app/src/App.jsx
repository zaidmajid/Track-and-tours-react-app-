import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Courses from './components/Courses';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <Events />
            <Blog />
            <Testimonials />
            <Courses />
            <About />
            <Footer />
        </div>
    );
};

export default App;
