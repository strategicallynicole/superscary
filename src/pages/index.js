import React, { Component } from 'react';
import About from '../components/HomeFive/About';
import Background from '../components/Backgrounds/Waves/Waves';
import Clients from '../components/Clients/composer.js';
import CTA from '../components/CTA/CTAwithPic';
import Faq from '../components/HomeFive/Faq';
import Footer from '../components/Layouts/Footer';
import Homepage from '../templates/index';
import Industries from '../components/Blocks/Industries/Industries';
import MainBanner from '../components/Blocks/Slider';
import News from '../components/common/News';
import Services from '../components/Blocks/Services/Services';
import Stats from '../components/Blocks/Stats/Stats';
import Stars from "../components/Blocks/LetUsGuess/LetUsGuess";
class Index extends Component {
    render() {
        return (
            <>
            <Homepage>
            <Background>
                <MainBanner />
                <Stars />
                <Services />
                <Stats />
                <Industries />
                <Clients />
                <News />
                <CTA />
            </Background>
            </Homepage>
            </>
        );
    }
}

export default Index;
