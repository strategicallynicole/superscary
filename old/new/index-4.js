import React, { Component } from 'react';
import MainBanner from '../../components/HomeFour/MainBanner';
import PartnerSliderTwo from '../../components/common/PartnerSliderTwo';
import About from '../../components/HomeFour/About';
import Services from '../../components/HomeFour/Services';
import WhyChooseUs from '../../components/HomeFour/WhyChooseUs';
import MakeYourBusiness from '../../components/HomeFour/MakeYourBusiness';
import WhatWeOffer from '../../components/HomeFour/WhatWeOffer';
import Team from '../../components/common/Team';
import CaseStudies from '../../components/HomeFour/CaseStudies';
import Testimonials from '../../components/common/Testimonials';
import Faq from '../../components/HomeFour/Faq';
import Newsletter from '../../components/common/Newsletter';
import News from '../../components/HomeFour/News';
import Footer from '../../components/Layouts/Footer';
import "../../styles/base.css";
import Structure from "../../components/Structure/layout.js";
import Background from '../../components/Backgrounds/Waves';

class Index4 extends Component {
    render() {
        return (
            <>
    <Structure>
            <Background>
                    <MainBanner />

                    <PartnerSliderTwo />
                    <About />
                    <Services />
                    <WhyChooseUs />
                    <MakeYourBusiness />
                    <WhatWeOffer />
                    <CaseStudies />
                    <Team />
                    <Testimonials />
                    <Faq />
                    <Newsletter />
                    <News />
                    <Footer />
</Background>
</Structure>
</>
        );
    }
}

export default Index4;
