import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeFive/MainBanner';
import PartnerSlider from '../components/Common/PartnerSlider';
import About from '../components/HomeFive/About';
import WhyChooseUs from '../components/HomeFive/WhyChooseUs';
import Services from '../components/HomeFive/Services';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import WhatWeOffer from '../components/HomeFive/WhatWeOffer';
import CaseStudies from '../components/HomeFive/CaseStudies';
import Testimonials from '../components/Common/Testimonials';
import Faq from '../components/HomeFive/Faq';
import Stars from "../components/Heroes/stars";
import News from '../components/Common/News';
import Footer from '../components/Layouts/Footer';
import "../styles/animate.css";
import Structure from "../components/Structure/layout.js";
import Background from '../components/Parallax/Background';
import "../styles/bootstrap.min.css";
class Index5 extends Component {
    render() {
        return (
            <>
            <Structure>
            <Background>
                <MainBanner />
                <Stars />
                <WhyChooseUs />
                <Services />
                <MakeYourBusiness />
                <WhatWeOffer />
                <CaseStudies />
                <Testimonials />
                <PartnerSlider />
                <About />
                <Faq />
                <News />
                <Footer />
            </Background>
            </Structure>
            </>
        );
    }
}

export default Index5;
