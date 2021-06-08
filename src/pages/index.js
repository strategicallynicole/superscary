import React, { Component } from 'react';
import MainBanner from '../components/Blocks/Slider';
import PartnerSlider from '../components/Common/PartnerSlider';
import About from '../components/HomeFive/About';
import ProblemsWeSolve from '../components/Blocks/ProblemsWeSolve/ProblemsWeSolve';
import Services from '../components/Blocks/Services/Services';
import MakeYourBusiness from '../components/Blocks/Stats/Stats';
import WhatWeOffer from '../components/HomeFive/WhatWeOffer';
import CaseStudies from '../components/HomeFive/CaseStudies';
import Testimonials from '../components/Common/Testimonials';
import Faq from '../components/HomeFive/Faq';
import Stars from "../components/Blocks/LetUsGuess/LetUsGuess";
import News from '../components/Common/News';
import Footer from '../components/Layouts/Footer';
import "../styles/animate.css";
import Structure from "../components/Structure/layout.js";
import Background from '../components/Parallax/Background';
class Index extends Component {
    render() {
        return (
            <>
            <Structure>
            <Background>
                <MainBanner />
                <Stars />
                <ProblemsWeSolve />
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

export default Index;
