/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 01:32:28
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React from "react";
import PropTypes from "prop-types";
import ButtonStyle from './btn.style';
import "./button.comp.scss";


const Button = ({
    className,
    children,
  ...props

}) => {
  const addClasses = [''];
  if (className) {
    addClasses.push(className);
  }



  return (
    <ButtonStyle
      className={addClasses.join(" ")}
      {...props}
    >
    {children}
    </ButtonStyle>
  )
};

Button.propTypes = {
    as: PropTypes.oneOf(["button", "a",]), //--
    upperCase: PropTypes.bool, //--
    styleName: PropTypes.oneOf(["purple", "blue", "lightblue", "gradient", "black", "darkknightrises"]), //--

  };

export default Button;
