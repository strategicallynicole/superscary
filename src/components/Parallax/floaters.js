import React, { Component } from "react";
import one from "../../images/shapes/wave.svg";
import two from "../../images/shapes/wave.svg";
import three from "../../images/shapes/wave.svg";
import four from "../../images/shapes/line.svg";
import five from "../../images/shapes/line.svg";
import six from "../../images/shapes/line.svg";
function Floaters({children}) {
    return (
        <>
<div className="offer-area">
{children}
<div className="offer-shape">
                    <img src={one} alt="Image" />
                    <img src={two} alt="Image" />
                    <img src={three} alt="Image" />
                    <img src={four} alt="Image" />
                    <img src={five} alt="Image" />
                    <img src={six} alt="Image" />
</div></div> </>
 );

}

export default Floaters;
