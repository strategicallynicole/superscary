import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/common/PageBanner';
import About from '../../components/AboutOne/About';
import MakeYourBusiness from '../../components/Blocks/Stats/Stats';
import Testimonials from '../../components/common/Testimonials';
import TeamTwo from '../../components/common/TeamTwo';
import Partner from '../../components/common/Partner';
import Footer from '../../components/Layouts/Footer';

class About1 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle="About Style One"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="About Style One"
                />
                <About />
                <MakeYourBusiness />
                <Testimonials />
                <TeamTwo />
                <div className="pb-50">
                    <Partner />
                </div>
                <Footer />
            </>
        );
    }
}

export default About1;
