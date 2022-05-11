import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services/>
            <ServiceBanner/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact></Contact>
            <Footer/>
        </div>
    );
};

export default Home;