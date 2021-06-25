/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 22/06/2021 - 01:47:22
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MetaData } from '../components/Meta'
import Structure from '../components/Structure/layout.js'
import "../styles/ghost.scss";
import "../styles/post.scoped.scss";
import CaseStudySqueeze from "../components/CTA/CaseStudySqueeze";

const Post = ({ data, location }) => {
    const post = data.ghostPost

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
<Structure>


<section key={post.key} className="relative fadedblackgradient">


<div className="relative px-16 overflow-hidden sm:pl-1">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">



        { post.feature_image ?
                         <figure className="post-feature-image">
                                <img className="w-full rounded-lg" src={ post.feature_image } alt={ post.title } />
                                <figcaption>{ post.title } </figcaption>

                            </figure> : null }



        </div>
      </div>


      </div>




      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h1 key={post.key}>
            <span className="block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase">
            {post.subtitle}
                        </span>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
            {post.title}
                        </span>
          </h1>
        </div>



        <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo" dangerouslySetInnerHTML={{ __html: post.html }} />



<CaseStudySqueeze />
</div>
</section>
            </Structure>
        </>
    )
}



Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`


