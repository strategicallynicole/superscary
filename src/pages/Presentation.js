/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// reactstrap components
// import {
//
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Info from "../views/PresentationSections/Info.js";
import BasicComponents from "../views/PresentationSections/BasicComponents.js";
import Cards from "../views/PresentationSections/Cards.js";
import Content from "../views/PresentationSections/Content.js";
import Sections from "../views/PresentationSections/Sections.js";
import Examples from "../views/PresentationSections/Examples.js";
import FreeDemo from "../views/PresentationSections/FreeDemo.js";
import Icons from "../views/PresentationSections/Icons.js";
import Features from "../views/PresentationSections/Features.js";
import Testimonials from "../views/PresentationSections/Testimonials.js";
import Pricing from "../views/PresentationSections/Pricing.js";

export default function Presentation() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("presentation-page");
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <PresentationHeader />
        <div className="space-110" />
        <Info />
        <BasicComponents />
        <div className="space-110" />
        <Cards />
        <div className="space-110" />
        <Content />
        <Sections />
        <Examples />
        <FreeDemo />
        <Icons />
        <Features />
        <Testimonials />
        <Pricing />
        <DemoFooter />
      </div>
    </>
  );
}
