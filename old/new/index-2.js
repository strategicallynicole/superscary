import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import MainBanner from '../../components/HomeTwo/MainBanner';
import Features from '../../components/HomeTwo/Features';
import About from '../../components/HomeTwo/About';
import Services from '../../components/HomeTwo/Services';
import Pricing from '../../components/HomeTwo/Pricing';
import Newsletter from '../../components/common/Newsletter';
import MakeYourBusiness from '../../components/Blocks/Stats/Stats';
import Testimonials from '../../components/common/Testimonials';
import WhatWeOffer from '../../components/HomeTwo/WhatWeOffer';
import News from '../../components/common/News';
import Partner from '../../components/common/Partner';
import Footer from '../../components/Layouts/Footer';

class Index2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <Features />
                <About />
                <Services />
                <Pricing />
                <Newsletter />
                <MakeYourBusiness />
                <Testimonials />
                <WhatWeOffer />
                <News />

                <div className="pb-50">
                    <Partner />
                </div>

                <Footer />
            </>
        );
    }
}

export default Index2;
