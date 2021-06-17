import React from "react";
import PropTypes from "prop-types";
// components
import MediaPlayerImageOnly from "../../../../components/MediaPlayers/MediaPlayerImageOnly.js";
import ImagePost from "../../../../components/Images/ImagePost.js";
import "./post.scoped.scss";
export default function Blogs4({ items }) {
  return (
    <>
      {items.map((prop, key) => {
        return (
          <section key={key} className="relative pt-12 blackgradient">
            {prop.imagepost ? (
              <div className="container px-4 mx-auto">
                <div className="flex flex-wrap justify-center -mx-4">
                  <ImagePost {...prop.imagepost} />
                </div>
              </div>
            ) : null}
            {prop.mediaplayer ? (
              <MediaPlayerImageOnly {...prop.mediaplayer} />
            ) : null}
            {prop.textSection ? (
              <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                  <div className="relative w-full mx-auto md:w-8/12">
                    {prop.textSection.map((textProp, textKey) => {
                      if (textProp.title) {
                        return (
                          <h3
                            key={textKey}
                            className="mt-0 mb-2 text-3xl font-bold leading-normal"
                          >
                            {textProp.title}
                          </h3>
                        );
                      } else if (textProp.subtitle) {
                        return (
                          <h6
                            key={textKey}
                            className="mt-2 mb-0 text-lg text-blueGray-400"
                          >
                            {textProp.subtitle}
                          </h6>
                        );
                      } else if (textProp.quote) {
                        return (
                          <p
                            key={textKey}
                            className="block pl-4 mx-0 my-12 text-xl border-l border-l-2 text-blueGray-500 border-blueGray-200"
                          >
                            "{textProp.quote}"
                            <br />
                            <small className="mt-2 font-semibold text-blueGray-700">
                              {textProp.author}
                            </small>
                          </p>
                        );
                      } else {
                        return (
                          <p
                            key={textKey}
                            className="mb-4 text-lg text-blueGray-500"
                          >
                            {textProp.description}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        );
      })}
    </>
  );
}

Blogs4.defaultProps = {
  items: [],
};

Blogs4.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        // an object representing the props
        // that can be passed to our ImagePost component
        imagepost: PropTypes.object,
      }),
      PropTypes.shape({
        // an object representing the props
        // that can be passed to our MediaPlayerImageOnly component
        mediaplayer: PropTypes.object,
      }),
      PropTypes.shape({
        textSection: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.shape({ title: PropTypes.string }),
            PropTypes.shape({ subtitle: PropTypes.string }),
            PropTypes.shape({ description: PropTypes.string }),
            PropTypes.shape({
              quote: PropTypes.string,
              author: PropTypes.string,
            }),
          ])
        ),
      }),
    ])
  ),
};
