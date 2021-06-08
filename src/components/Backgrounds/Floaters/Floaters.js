import React, { Component } from "react";
import one from "../../../images/shapes/wave.svg";
import two from "../../../images/shapes/wave.svg";
import three from "../../../images/shapes/wave.svg";
import four from "../../../images/shapes/line.svg";
import five from "../../../images/shapes/line.svg";
import six from "../../../images/shapes/line.svg";
import "./Floaters.scss";
function Floaters({children}) {
    return (
        <>
<div className="absolute w-full h-full floater-area">
<div className="floater-shape">
                    <img src={one} alt="OAKwave" />
                    <img src={two} alt="OAKwave" />
                    <img src={three} alt="OAKwave" />
                    <img src={four} alt="OAKwave" />
                    <img src={five} alt="OAKwave" />
                    <img src={six} alt="OAKwave" />

</div>
</div> </>
 );

}

export default Floaters;
