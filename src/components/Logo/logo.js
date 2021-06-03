import React, { Component } from 'react';
import { array, oneOf, PropTypes } from 'prop-types';
import { StaticImage } from "gatsby-plugin-image"
const logotype = 'standard';

class LogoComponent extends React.Component {
  constructor(props) {
    super(props);
    const {type} = this.props;
  
const logotype = this.props.type;

  }
  
render() {
  const { logotype } = this.props;
  switch (logotype) {
    case 'standard':
      return  
    <>
    <StaticImage
      src="./horizontal/white.webp"
      alt="White Logo"
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={25}
        />
        </>;
    case 'darkversion':
      return  
          <>

<StaticImage
      src="./horizontal/black.webp"
      alt="Black Logo"
      placeholder="blurred"
      layout="fixed"
          width={100}
      height={25}
    />
            </>;

      case 'stackedwhite':
      return  
      <>
      <StaticImage
      src="./stacked/white.webp"
      alt="White Logor"
      placeholder="blurred"
      layout="fixed"
    width={25}
      height={100}
    />
    </>;
     case 'stackeddark':
      return  <>
      <StaticImage
      src="./stacked/black.webp"
      alt="BlackLogo"
      placeholder="blurred"
      layout="fixed"
    width={25}
      height={100}
    /></>;
    case 'symbol':
      return  <><StaticImage
      src="./symbol.svg"
      alt="Symbol"
      placeholder="blurred"
      layout="fixed"
      width={52}
      height={52}
    /></>;
    case 'abbreviation':
      return <> <StaticImage
      src="./abbreviation.webp"
      alt="Abbreviation"
      placeholder="blurred"
      layout="fixed"
    width={100}
      height={25}
    /></>;
    default:
     return <> <StaticImage
      src="./horizontal/white.webp"
      alt="Placeholder"
      placeholder="blurred"
      layout="fullWidth"
      width={100}
      height={25}
    /></>;
  }
  }
}


/**
 * Define component props
 */

   


LogoComponent.propTypes = {
  type: PropTypes.oneOf(['standard', 'darkversion', 'stackedwhite', 'stackeddark', 'symbol', 'abbreviation']),

};
LogoComponent.defaultProps = {
  type: 'standard',
};
 

export default LogoComponent;

