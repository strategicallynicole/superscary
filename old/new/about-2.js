import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/common/PageBanner';
import About from '../../components/AboutTwo/About';
import WhyChooseUs from '../../components/AboutTwo/WhyChooseUs';
import MakeYourBusiness from '../../components/Blocks/Stats/Stats';
import Testimonials from '../../components/common/Testimonials';
import PartnerSlider from '../../components/common/PartnerSlider';
import Footer from '../../components/Layouts/Footer';

class About2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle="About Style Two"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="About Style Two"
                />
                <About />
                <WhyChooseUs />
                <MakeYourBusiness />
                <Testimonials />
                <PartnerSlider />
                <Footer />
            </>
        );
    }
}

export default About2;
