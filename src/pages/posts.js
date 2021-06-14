import React, { Component } from 'react';
import MainBanner from '../components/Blocks/Slider';
import Clients from '../components/Clients/composer.js';
import About from '../components/HomeFive/About';
import Services from '../components/Blocks/Services/Services';
import Stats from '../components/Blocks/Stats/Stats';
import Industries from '../components/Blocks/Industries/Industries';
import Faq from '../components/HomeFive/Faq';
import Stars from "../components/Blocks/LetUsGuess/LetUsGuess";
import News from '../components/Common/News';
import Footer from '../components/Layouts/Footer';
import Background from '../components/Backgrounds/Waves/Waves';
import CTA from '../components/CTA/CTAwithPic';
import HomePage from '../templates/index';
class Index extends Component {
    render() {
        return (
            <>
            <HomePage>
            <Background>
                <MainBanner />
                <Stars />
                <Services />
                <Stats />
                <Industries />
                <Clients />
                <News />
                <CTA />
                <Footer />
            </Background>
            </HomePage>
            </>
        );
    }
}

export default Index;
