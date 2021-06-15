import Navbar from '../../components/Layouts/Navbar'
import MainBanner from '../../components/HomeOne/MainBanner'
import Features from '../../components/HomeOne/Features'
import About from '../../components/HomeOne/About'
import WhyChooseUs from '../../components/HomeOne/WhyChooseUs'
import Services from '../../components/HomeOne/Services'
import MakeYourBusiness from '../../components/Blocks/Stats/Stats'
import WhatWeOffer from '../../components/HomeOne/WhatWeOffer'
import Testimonials from '../../components/common/Testimonials'
import News from '../../components/common/News'
import Footer from '../../components/Layouts/Footer'

const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <About />
            <WhyChooseUs />
            <Services />
            <MakeYourBusiness />
            <WhatWeOffer />
            <Testimonials />
            <News />
            <Footer />
        </>
    )
}

export default Index
