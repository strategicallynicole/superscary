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
import { prop, ifProp } from 'styled-tools';
import styled from 'styled';

const GradientBackground = styled.button`
  position: relative;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  padding: ${props => props.borderWidth}px;
  outline: 0;
  background: linear-gradient(90deg, rgba(102, 51, 255, .7) 18.59%, rgba(51, 102, 255, .7) 68.36%, rgba(0, 153, 255, .7) 105%);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 7.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    animation: rubberBand 2s linear;

  }
}`;

GradientBackground.propTypes = {

};

GradientBackground.defaultProps = {

};

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 10px 10px 5px;
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
  children,
  ...props
}) => (
  <GradientBackground
    {...props}
  >
    <Inner>
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
  linky: 'contact'
};

export default GlassyButton;
