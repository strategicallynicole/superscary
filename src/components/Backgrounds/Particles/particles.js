import React from 'react';

import Particles from "react-tsparticles";
import circle from "../../../images/shapes/circle.svg";
export default function App() {
    return (
      <Particles
        options={{
          backgroundMode: {
            enable: true,
            zIndex: 0
          },
          particles: {
            number: {
              value: 10,
              limit: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "linear-gradient(90deg, #6633FF 18.59%, #3366FF 68.36%, #0099FF 105%)",

            },
            shape: {
              image: {
                src: {circle},
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false
              }
            },
            size: {
              value: 30,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 100,
              color: "#ffffff",
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 100,
                duration: 2,
                opacity: 1,
                speed: 2
              },
              repulse: {
                distance: 200
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          backgroundMask: {
            enable: false,
            cover: {
              color: {
                value: {
                  r: 0,
                  g: 0,
                  b: 0
                }
              }
            }
          },
          retina_detect: true,
          fps_limit: 60,
        //  background: {
        //    image:
              //"url('https://cdn.matteobruni.it/images/particles/background3.jpg')"
        //  }
        }}
      />
    );
  }
