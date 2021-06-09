import React, { Component } from 'react';
import {Link} from 'gatsby';
import "./Industries.scoped.scss";
class Industries extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="industries-area pb-100">
			    <div className="container">
                    <div className="section-title">
                        <span>What We Offer</span>
                        <h2>Industries We Serve</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
                    </div>











                    <div className="tab industries-list-tab">


                    <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

<div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">





                                {/* Tabs navs */}
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        <span>
                                            <i className="flaticon-machine-learning"></i>
                                            <h3>Heavy Industry</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        <span>
                                            <i className="flaticon-artificial-intelligence"></i>
                                            <h3>Transportation</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        <span>
                                            <i className="flaticon-health"></i>
                                            <h3>Health Care</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        <span>
                                            <i className="flaticon-automation"></i>
                                            <h3>Manufacturing</h3>
                                            <p>All kind of industry</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>

<div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                                <div className="tab_content">
                                    {/* Tab item #1 */}
                                    <div id="tab1" className="tabs_item">
                                                <div className="industries-img left-img">
                                                    <img src="/images/offer1.png" alt="Image" />
                                                </div>

                                                <div className="industries-content">
                                                    <h3>Heavy Industry</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt?</p>

                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Opportunities
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Creating
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Industries
                                                                </li>
                                                            </ul>

                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Security
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Highest
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Priority
                                                                </li>
                                                            </ul>


                                                    <div className="text-center">
                                                        <Link href="/index-5/#">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                    </div>

                                    {/* Tab item #2 */}
                                    <div id="tab2" className="tabs_item">
                                                <div className="industries-content">
                                                    <h3>Transportation</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>

                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Security
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Highest
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Priority
                                                                </li>
                                                            </ul>

                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Opportunities
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Creating
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Industries
                                                                </li>
                                                            </ul>

                                                    <div className="text-center">
                                                        <Link href="/index-5/#">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="industries-img right-img">
                                                    <img src="/images/offer2.png" alt="Image" />
                                                </div>
                                    </div>

                                    {/* Tab item #3 */}
                                    <div id="tab3" className="tabs_item">
                                                <div className="industries-img left-img">
                                                    <img src="/images/offer3.png" alt="Image" />
                                                </div>

                                                <div className="industries-content">
                                                    <h3>Health Care</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>

                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Creating
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Consectetur
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Adipisicing
                                                                </li>
                                                            </ul>

                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Artificial
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Industry
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Opportunities
                                                                </li>
                                                            </ul>

                                                    <div className="text-center">
                                                        <Link href="/index-5/#">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>





                                    </div>

                      {/* Tab item 3 end */}


                      {/* Tab item #4 */}
                                    {/* Tab item #4 */}
                                    <div id="tab4" className="tabs_item">
                                                <div className="industries-content">
                                                    <h3>Manufacturing</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>


                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Opportunities
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Creating
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Industries
                                                                </li>
                                                            </ul>

                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Security
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Highest
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    Priority
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    <div className="text-center">
                                                        <Link href="/index-5/#">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
</div>

                                    {/* Tab item #4 */}

</div> {/* tab content closer */}
</div>                                    {/* column closer */}


                                    {/* opened */}


<div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                                                <div className="industries-img right-img">
                                                    <img src="/images/offer4.png" alt="Image" />
                                                </div>
</div>



                                    {/* closed */}













                                    </div>
                            </div>
                        </div>
            </section>
        );
    }
}

export default Industries;
