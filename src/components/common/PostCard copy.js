import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import './PostCard.scoped.scss';
const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <div className="glass post-card border rounded mt-20">
            <header className="post-card-header">
              {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
           {post.tags && <div className="mx-5 px-5"><div className="post-card-tags">        <Tags post={post} visibility="public" autolink={true} /></div></div>}
                {post.featured && <span>Featured</span>}
          <Link to={url}>      <h2 className="post-card-title px-10 py-10">{post.title}</h2></Link>
            </header>
           <Link to={url}>   <section className="post-card-excerpt px-10 py-10">{post.excerpt}</section>
            <footer className="post-card-footer px-10 py-10">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                        {post.primary_author.profile_image ?
                            <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                            <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                        }
                    </div>
                    <span>{ post.primary_author.name }</span>
                </div>
                <div className="post-card-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
            </Link>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
