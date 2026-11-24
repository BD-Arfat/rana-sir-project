import React from 'react';
import ServicesHero from './ServicesHero';
import OurServices from './OurServices';
import ServiceDetails from './ServiceDetails';
import WhyChooseServices from './WhyChooseServices';
import ServiceProcess from './ServiceProcess';
import ContactCTA from './ContactCTA';

const Services = () => {
    return (
        <div>
            <ServicesHero/>
            <OurServices/>
            <ServiceDetails/>
            <WhyChooseServices/>
            <ServiceProcess/>
            <ContactCTA/>
        </div>
    );
};

export default Services;