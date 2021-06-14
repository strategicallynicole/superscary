import React, { Component } from 'react'
import { array, oneOf, PropTypes } from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'



function LogoComponent(props){
    const { type } = props;
    switch(type) {
        case 'standard':
            return (
            <>

              <StaticImage
                src="../../images/logos/logo/horizontal/white@1x.webp"
                alt="White Logo"
                placeholder="blurred"
                layout="fullWidth"
                width={100}
                height={25}
              />
            </> );
          case 'darkversion':
            return (
            <>
              <StaticImage
                src='../../images/logos/logo/horizontal/black.webp'
                alt="Black Logo"
                placeholder="blurred"
                layout="fullWidth"
                width={100}
                height={25}
              />
            </>);

          case 'stackedwhite':
            return (
            <>
              <StaticImage
                src='../../images/logos/logo/stacked/white.webp'
                alt="White Logor"
                placeholder="blurred"
                layout="fullWidth"
                width={25}
                height={100}
              />
            </>);
          case 'stackeddark':
            return (
              <>
                <StaticImage
                  src='../../images/logos/logo/stacked/black.webp'
                  alt="BlackLogo"
                  placeholder="blurred"
                  layout="fullWidth"
                  width={25}
                  height={100}
                />
              </>
            );
          case 'symbol':
            return (
              <>
                <StaticImage
                  src='../../images/logos/symbol.svg'
                  alt="Symbol"
                  placeholder="blurred"
                  layout="fullWidth"
                  width={52}
                  height={52}
                />
              </>
            );
          case 'abbreviation':
            return (
              <>
                <StaticImage
                  src='../../images/logos/logo/abbreviation.webp'
                  alt="Abbreviation"
                  placeholder="blurred"
                  layout="fullWidth"
                  width={100}
                  height={25}
                />
              </>
            );
          default:
            return (
              <>
                <StaticImage
                  src="../../images/logos/horizontal/white.webp"
                  alt="Placeholder"
                  placeholder="blurred"
                  layout="fullWidth"
                  width={100}
                  height={25}
                />
              </>
            );
    }
  }


LogoComponent.propTypes = {
    type: PropTypes.oneOf([
    'standard',
    'darkversion',
    'stackedwhite',
    'stackeddark',
    'symbol',
    'abbreviation',
  ]),
}
LogoComponent.defaultProps = {
    type: 'standard',
}

export default LogoComponent
