/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 01:56:57
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
import { Link } from "gatsby"
import "./GradientBG.comp.scss";

export default function Background({children}) {
        return (
<>
          <div className="gradientbgdiv">
                {children}
          </div>
          </>
        );
    }

