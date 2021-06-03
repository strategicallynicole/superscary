import React, { Component } from 'react';;
import { Link } from "gatsby";
import RunningMan from '../Illustrations/RunningMan';
import dynamic from 'next/dynamic';
import "./banner.scss";
import { render } from "react-dom";
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:0,
    nav:true,
    mouseDrag: false,
    items:1,
    dots: false,
    // autoHeight: true,
    autoplay: true,
    smartSpeed:500,
    autoplayHoverPause: true,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}


class MainBanner extends Component {

    state = {
        display: false,
        panel: true
    };

    componentDidMount(){
        this.setState({ display: true })
    }

    render() {
        return (
        <>
            <section className="slider-area">


                {this.state.display ? <OwlCarousel
                    className="arduix-slider owl-carousel owl-theme"
                    {...options}
                >

                    <div className="arduix-slider-item">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="overflow-hidden arduix-slider-text one">

                                    <div class="section group">






                                    <div class="flex flex-wrap overflow-hidden">

<div class="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">

<div class="text-center"><h1 className="pl-2 mt-8 leading-normal text-white border-l-8 2xl:text-9xl xl:text-9xl text-9xl dincondensed lg:pl-12 xl:mt-0">Hi.</h1><h2 className="font-bold underline dincondensed white-text font-size-3xl ">We Need To Talk.</h2>
                                        <p className="grotesk white-text font-size-xl">It's about your brand and creative again.  It's been... frightening.</p> 	</div>

</div>

<div class="w-full overflow-visible md:w-1/2 lg:w-1/2 xl:w-1/2">

    <RunningMan />

</div>




</div></div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="overflow-hidden arduix-slider-text two">
                                        <span>IT & AI Services</span>
                                        <h1>Specialized Artificial Intelligence Startup</h1>
                                        <p>If we drive down the cost of transportation in space, we can do great things.</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="overflow-hidden arduix-slider-text three">
                                        <span>IT & AI Services</span>
                                        <h1>World’s Leading Machine Learning Company</h1>
                                        <p>If we drive down the cost of transportation in space, we can do great things.</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </section>

</>
        );
    }
}

export default MainBanner;
