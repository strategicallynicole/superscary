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

// core components
import ColorNavbar from "../components/Navbars/ColorNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Basic from "../views/IndexSections/Basic.js";
import Navbars from "../views/IndexSections/Navbars.js";
import Tabs from "../views/IndexSections/Tabs.js";
import Pills from "../views/IndexSections/Pills.js";
import Pagination from "../views/IndexSections/Pagination.js";
import Notifications from "../views/IndexSections/Notifications.js";
import PreFooter from "../views/IndexSections/PreFooter.js";
import Footers from "../views/IndexSections/Footers.js";
import Typography from "../views/IndexSections/Typography.js";
import ContentAreas from "../views/IndexSections/ContentAreas.js";
import Cards from "../views/IndexSections/Cards.js";
import PlainCards from "../views/IndexSections/PlainCards.js";
import JavaScript from "../views/IndexSections/JavaScript.js";
import NucleoIcons from "../views/IndexSections/NucleoIcons.js";

export default function Index() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("index-page");
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <IndexHeader />
        <div className="main">
          <Basic />
          <Navbars />
          <Tabs />
          <Pills />
          <Pagination />
          <Notifications />
          <PreFooter />
          <Footers />
          <Typography />
          <ContentAreas />
          <Cards />
          <PlainCards />
          <JavaScript />
          <NucleoIcons />
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
