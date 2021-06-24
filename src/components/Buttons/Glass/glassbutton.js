/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 16:48:33
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/

import React from 'react';
import PropTypes from 'prop-types';
import { prop, ifProp, switchProp } from 'styled-tools';
import styled, { css } from 'styled-components';
import "./glassbutton.comp.scss";
const GradientBackground = styled.button`
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
  &:hover {
    animation: rubberBand 2s linear;
}
    background: ${switchProp('gradient', {
    regular: 'linear-gradient(90deg, rgba(102, 51, 255, .7) 18.59%, rgba(51, 102, 255, .7) 68.36%, rgba(0, 153, 255, .7) 105%)',
    black: 'rgba( 0, 0, 0, 0.60 )'
  })};
 `

GradientBackground.propTypes = {
  gradient: PropTypes.oneOf[('black', 'regular')]
}

GradientBackground.defaultProps = {
  gradient: 'black'
}

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px 7px 7px 7px;
  outline: 0;
  animation: rubberBand 2s linear;
  transition: 2s all ease-in-out;
      &:hover {
        background: transparent;
        color: #fff;
        animation: rubberBand 2s linear;

      }
  };
`;

const GlassyButton = ({
  children, gradient, texty, ...props
}) => (
  <GradientBackground
  gradient={gradient}
    {...props}
  >
    <Inner>
   {texty}
      {children}
    </Inner>
  </GradientBackground>
);

GlassyButton.propTypes = {
  texty: PropTypes.string,
  linky: PropTypes.string
};

GlassyButton.defaultProps = {
  texty: 'Clink',
  linky: 'contact',
};

export default GlassyButton;
