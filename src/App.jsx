import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Courses from './components/Courses';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import News from './components/News';
import Contact from './components/Contact'; // Import the Contact component
import './App.css';

const MainPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Events />
            <Blog />
            <Testimonials />
            <Courses />
            <Footer />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} /> {/* Add this route */}
            </Routes>
        </Router>
    );
};

export default App;
