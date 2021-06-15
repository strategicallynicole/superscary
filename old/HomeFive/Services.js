import React, { Component } from 'react';
import { Link } from "gatsby";
import one from "../../images/shapes/wave.svg";
import two from "../../images/shapes/wave.svg";
import three from "../../images/shapes/wave.svg";
import four from "../../images/shapes/line.svg";
import five from "../../images/shapes/line.svg";

class Services extends Component {
    render() {
        return (
            <section className="offer-area pt-100 pb-70">
			    <div className="container">
                    <div className="section-title">
                        <span>Services</span>
                        <h2>Our Professional Services For You</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure architecto quaerat eaque sapiente accusantium ad ut explicabo consequuntur fuga quidem? Sint.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-chip"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Robotics & Drones</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Virtually Reality</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Blockchain Project</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Image Processing</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Order Management</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-offer">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Machine Learning</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src={one} alt="Image" />
                    <img src={two} alt="Image" />
                    <img src={three} alt="Image" />
                    <img src={four} alt="Image" />
                    <img src={five} alt="Image" />
                </div>
            </section>
        );
    }
}

export default Services;
