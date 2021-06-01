import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>Sadness not found</h2>
  </Layout>
)

export default NotFoundPage;
