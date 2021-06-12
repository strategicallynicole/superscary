import React from "react";
import "./blurry.scss";

const Blurry = ({children}) => (
    <div
    style={{
      position: "relative",

      width: "100%",
      height: "100%",
    }}
  >
<div className="particlesbackground">    {children}

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                </div>
                </div>

)

export default Blurry
