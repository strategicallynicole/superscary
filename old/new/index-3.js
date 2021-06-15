import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import MainBanner from '../../components/HomeThree/MainBanner';
import PartnerSlider from '../../components/common/PartnerSlider';
import About from '../../components/HomeThree/About';
import WhyChooseUs from '../../components/HomeThree/WhyChooseUs';
import Services from '../../components/HomeThree/Services';
import MakeYourBusiness from '../../components/Blocks/Stats/Stats';
import WhatWeOffer from '../../components/HomeThree/WhatWeOffer';
import CaseStudies from '../../components/HomeThree/CaseStudies';
import Testimonials from '../../components/common/Testimonials';
import Faq from '../../components/HomeThree/Faq';
import News from '../../components/common/News';
import Footer from '../../components/Layouts/Footer';

class Index3 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <PartnerSlider />
                <About />
                <WhyChooseUs />
                <Services />
                <MakeYourBusiness />
                <WhatWeOffer />
                <CaseStudies />
                <Testimonials />
                <Faq />
                <News />
                <Footer />
            </>
        );
    }
}

export default Index3;
