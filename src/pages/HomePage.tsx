import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Services from '../components/Services';
import Roadmap from '../components/Roadmap';
import StrategicPartner from '../components/StrategicPartner';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import ScrollToTop from '../components/ScrollToTop';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <Partners />
            <Services />
            <Roadmap />
            <StrategicPartner />
            <Testimonials />
            <AboutUs />
            <ScrollToTop />
        </Layout>
    );
};

export default HomePage;
