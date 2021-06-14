import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import Structure from "../components/Structure/layout.js";


const HomePage = ({ children }) => {
    return (
        <>
            <Helmet>
                <link href="./fonts/FlatIcon/flaticon.css" rel="stylesheet" />
            </Helmet>
            <Structure>
                          {children}
            </Structure>
            </> )
};

export default HomePage;