import React, { Component } from 'react';
import { Link } from "gatsby"
import "./Stats.scoped.scss";

class MakeYourBusiness extends Component {
    render() {
        return (
            <section className="px-10 business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>By The Numbers</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>AI Will Automate Cybersecurity Improve</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>A Community With A Unique Mission</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="/about-2">
                                    <a className="default-btn">
                                        Know Details
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-px overflow-hidden sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-px">
                                <div className="w-full px-px my-px overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-px lg:px-px lg:w-1/2 xl:my-px xl:px-px xl:w-1/2 counter-nth">
                                    <div className="rounded single-counter bg-black-gradient">
                                        <h2><span className="text-4xl underline target dincondensed bold text-blue">318</span></h2>
                                        <p>Brands Reborn</p>
                                </div>

                                <div className="w-full px-px my-px overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-px lg:px-px lg:w-1/2 xl:my-px xl:px-px xl:w-1/2 counter-nth">
                                    <div className="rounded single-counter bg-black-gradient">
                                        <h2><span className="text-4xl underline target dincondensed bold text-purple">247</span></h2>
                                        <p>Strategies Delivered</p>
                                    </div>
                                </div>

                                <div className="w-full px-px my-px overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-px lg:px-px lg:w-1/2 xl:my-px xl:px-px xl:w-1/2 counter-nth">
                                    <div className="border border-indigo-500 border-solid rounded hover:boder-white single-counter bg-black-gradient text-indigo hover:text-white">
                                        <h2><span className="text-4xl underline target dincondensed bold">0</span></h2>
                                        <p className="font-light leading-4 text-md target roboto">Fucks Given</p>
                                    </div>
                                </div>

                                <div className="w-full px-px my-px overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-px lg:px-px lg:w-1/2 xl:my-px xl:px-px xl:w-1/2 counter-nth">
                                    <div className="rounded single-counter bg-black-gradient">
                                        <h2><span className="text-4xl underline target dincondensed bold text-pink">80</span></h2>
                                        <p>Award Win</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MakeYourBusiness;
