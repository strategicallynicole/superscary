import React from 'react';
import "./flashy.scoped.scss";

const FlashyButton = ({
    angle,
    background: _bg,
    borderRadius: _borderRadius,
    borderWidth,
    children,
    disabled,
    gradient,
    padding,
    theme,
    transition,
    ...props
  }) => (

<div className="btn-flashy">
{children}</div>);

export default FlashyButton;
