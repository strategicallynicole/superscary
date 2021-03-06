/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:35:54
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import cards from './data.js';
import { StaticImage } from 'gatsby-plugin-image';

import Particles from '../../Backgrounds/Particles/Stars';
import SectionTitle from '../../Titles/SectionTitle';
import './LetUsGuess.comp.scss';

function Stars() {

  return (
    <div className="rounded">
        <Hero>
          <div className="pb-10 starscontainer">
            <SectionTitle subtitle="We Get It" title='Let Us Guess' body=''/>

            <div className="starsrow">
                <div className="starscolumn">
                  <Card>
                    <StaticImage
                        src="../../../images/illustrations/trex.svg"
                        alt="You're a bit skeptical... of everything."
                        placeholder="blurred"
                        layout="fullWidth"
                        width={700}
                        loading="lazy"
                        className="object-cover pb-2 running-1 animate-enter"
                        />
                    <div className="starscard-title">You're a bit skeptical... of everything.</div>
                    <div className="starscard-body">You have tried every "new idea" that's slithered across your desk and you're just… done with it. On any idle Thursday at 11PM, when you can’t sleep and can’t find a solution to your impossible growth challenge, we’re the resource you've always needed.'</div>

                  </Card>
                </div>

                <div className="starscolumn">
                  <Card>
                    <StaticImage
                        src="../../../images/illustrations/pyramid.svg"
                        alt="You've Had It Up To..."
                        placeholder="blurred"
                        layout="fullWidth"
                        width={700}
                        loading="lazy"
                        className="object-cover pb-2 running-1 animate-enter"
                        />
                    <div className="starscard-title">You've Had It Up To...</div>
                    <div className="starscard-body">here with the "magical solution to all your marketing problems" line of crap you\'ve been given. There is no magic pill, But, we can find the blend without wasting more dollars.</div>

                  </Card>
                </div>

                <div className="starscolumn">
                  <Card>
                    <StaticImage
                        src="../../../images/illustrations/disparatee.svg"
                        alt="You're Tired of the Disconnect."
                        placeholder="blurred"
                        layout="fullWidth"
                        width={700}
                        loading="lazy"
                        className="object-cover pb-2 running-1 animate-enter"
                        />
                    <div className="starscard-title">You're Tired of the Disconnect.</div>
                    <div className="starscard-body">You have tried every "new idea" that's slithered across your desk and you're just… done with it. On any idle Thursday at 11PM, when you can’t sleep and can’t find a solution to your impossible growth challenge, we’re the resource you've always needed.</div>

                  </Card>
                </div>
            </div>
          </div>
        </Hero>
</div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="starscard"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 90; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}


function Hero({ children }) {
  return (
    <div className="starshero">
      <div className="starshero-body">{children}</div>
    </div>
  );
}



export default Stars;
