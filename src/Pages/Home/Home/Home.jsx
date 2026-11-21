import React from 'react';
import HomeSection from './HomeSection';
import OurStory from './OurStory';
import OurService from './OurService';
import WhyChoose from './WhyChoose';
import GallerySection from './GallerySection';
import CompanyStats from './CompanyStats';
import OurClients from './OurClients';

const Home = () => {
    return (
        <div>
            <HomeSection></HomeSection>
            <OurStory></OurStory>
            <OurService></OurService>
            <WhyChoose></WhyChoose>
            <GallerySection></GallerySection>
            <CompanyStats></CompanyStats>
            <OurClients></OurClients>
        </div>
    );
};

export default Home;