/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 23/06/2021 - 17:11:58
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/06/2021
    * - Author          :
    * - Modification    :
**/
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
        <h4 className="text-lg leading-tight text-center text-white grotesk text-bold">{subtitle}</h4>

                        <h2 className="text-6xl leading-tight text-center text-white underline stolzl text-bold">{title}</h2>
                        <p className="text-base text-center text-white roboto">{body}{children}</p>
                    </div>
                   </>

     )
 };

 export default SectionTitle
