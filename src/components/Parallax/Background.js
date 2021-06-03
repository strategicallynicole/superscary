import React from "react";
import ReactDOM from "react-dom";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import "./backgroundstyles.css";

export default function Background({children}) {
    var state = {
    value: -1
  };

  const handleChange = (event, value) => {
    document.getElementById(value).scrollIntoView();
    this.setState({ value });
  };

    return (
      <div>
        <canvas style={{ position: "absolute", zIndex: 900 }} id="canvas" />

        <ParallaxProvider>
          <div className="App" style={{ position: "relative" }}>
            <ParallaxBanner
              className="your-class"
              layers={[
                {
                    amount: 1,
                    expanded: true
                  },
                {

                  image: "./waves.svg",
                  amount: 3,
                  expanded: true
                },

              ]}
              style={{
                height: "100vh",
                overflow: "auto !important"
              }}
            >
             {children}{" "}
            </ParallaxBanner>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
