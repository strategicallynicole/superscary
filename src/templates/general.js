import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import Structure from "../components/Structure/layout.js";


/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const General = ({ children }) => {
    return (
        <>
        
            <Structure>
            
                          {children}
            </Structure>
            </> )
};

export default General;
