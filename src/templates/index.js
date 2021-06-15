import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { MetaData } from '../components/common/meta'
import Layout from "../components/Structure/layout.js";


const HomePage = ({ children }) => {
    return (
        <>
        
            <Helmet>
                <link href="./fonts/FlatIcon/flaticon.css" rel="stylesheet" />
            </Helmet>
            <Layout>
                          {children}
            </Layout>
            </> )
};

export default HomePage;
