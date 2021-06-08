/**
 * returns the div spanning 100% width containing string
 * @name SectionTitle
 * @param {string} title
 * @param {string} fontSize
 */
 import React from "react"; // eslint-disable-line no-unused-vars
 import "./SectionTitle.scoped.scss";

 const SectionTitle = ({title, subtitle, body, children}) => {
     return (
        <>
        <div className="section-title">
        <h4 className="text-2xl leading-loose text-center text-white grotesk text-bold"
    dangerouslySetInnerHTML={{__html: subtitle}} />

                        <h2 className="text-4xl leading-loose text-center text-white underline dincondensed text-bold">{title}</h2>
                        <p>{body}{children}</p>
                    </div>
                   </>

     )
 };

 export default SectionTitle
