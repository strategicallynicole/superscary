import React, { Component } from 'react';
import Navbar from '../../src/components/Layouts/Navbar';
import PageBanner from '../../src/components/Common/PageBanner';
import PricingStyleOne from '../../src/components/Pricing/PricingStyleOne';
import MakeYourBusiness from '../../src/components/Blocks/Stats/Stats';
import Footer from '../../src/components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle="Pricing"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Pricing"
                />
                <PricingStyleOne />
                <div className="bg-fafafa">
                    <MakeYourBusiness />
                </div>
                <Footer />
            </>
        );
    }
}

export default Pricing;
