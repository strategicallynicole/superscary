import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MetaData } from '../components/common/meta'
import Structure from '../components/Structure/layout.js'
import "../styles/ghost.scss";
import "../styles/post.scoped.scss";
import "./post.scoped.scss";

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
<section key={post.key} className="relative pt-12 fadedblackgradient">


<div className="container px-4 py-20 mx-auto">
<div className="flex flex-wrap justify-center -mx-4">

    <article className="postcontent">
        <div className="w-full mx-auto">
                        { post.feature_image ?
                         <figure className="post-feature-image">
                                <img src={ post.feature_image } alt={ post.title } />
                            </figure> : null }
                            </div>
                       <div className="relative w-full mx-auto md:w-8/12">

                          <h3
                            key={post.key}
                            className="mt-0 mb-2 text-3xl font-bold leading-normal"
                          >
                            {post.title}
                          </h3>

                           </div>
<div
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                    </article>
              </div> </div></section>
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
