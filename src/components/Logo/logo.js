import React, { Component } from 'react'
import { array, oneOf, PropTypes } from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

class LogoComponent extends React.Component {
  constructor(props) {
    super(props)
    const { type } = this.props

    const logotype = this.props.type
  }

  render() {
    const { logotype } = this.props
    switch (logotype) {
      case 'standard':
        return (
        <>
          <StaticImage
            src="./images/logos/horizontal/white.webp"
            alt="White Logo"
            placeholder="blurred"
            layout="fixed"
            width={100}
            height={25}
          />
        </> );
      case 'darkversion':
        return (
        <>
          <StaticImage
            src="./images/logos/horizontal/black.webp"
            alt="Black Logo"
            placeholder="blurred"
            layout="fixed"
            width={100}
            height={25}
          />
        </>);

      case 'stackedwhite':
        return (
        <>
          <StaticImage
            src="./images/logos/stacked/white.webp"
            alt="White Logor"
            placeholder="blurred"
            layout="fixed"
            width={25}
            height={100}
          />
        </>);
      case 'stackeddark':
        return (
          <>
            <StaticImage
              src="./images/logos/stacked/black.webp"
              alt="BlackLogo"
              placeholder="blurred"
              layout="fixed"
              width={25}
              height={100}
            />
          </>
        );
      case 'symbol':
        return (
          <>
            <StaticImage
              src="./images/logos/symbol.svg"
              alt="Symbol"
              placeholder="blurred"
              layout="fixed"
              width={52}
              height={52}
            />
          </>
        );
      case 'abbreviation':
        return (
          <>
            <StaticImage
              src="./images/logos/abbreviation.webp"
              alt="Abbreviation"
              placeholder="blurred"
              layout="fixed"
              width={100}
              height={25}
            />
          </>
        );
      default:
        return (
          <>
            <StaticImage
              src="./images/logos/horizontal/white.webp"
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
}

/**
 * Define component props
 */

LogoComponent.propTypes = {
  logotype: PropTypes.oneOf([
    'standard',
    'darkversion',
    'stackedwhite',
    'stackeddark',
    'symbol',
    'abbreviation',
  ]),
}
LogoComponent.defaultProps = {
    logotype: 'standard',
}

export default LogoComponent
