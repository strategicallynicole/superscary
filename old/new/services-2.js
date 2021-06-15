import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/common/PageBanner';
import ServicesStyleTwo from '../../components/Services/ServicesStyleTwo';
import MakeYourBusiness from '../../components/Blocks/Stats/Stats';
import WhatWeOffer from '../../components/Services/WhatWeOffer';
import Footer from '../../components/Layouts/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle="Services Style Two"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Services Style Two"
                />
                <ServicesStyleTwo />
                <MakeYourBusiness />
                <WhatWeOffer />
                <Footer />
            </>
        );
    }
}

export default Services2;
